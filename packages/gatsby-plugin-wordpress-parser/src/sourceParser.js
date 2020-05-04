const downloadMediaFile = require(`./utils`).downloadMediaFile
const convertFileNodeToFluid = require(`./utils`).convertFileNodeToFluid
const replaceAsync = require(`./utils`).replaceAsync
const copyToStatic = require(`./utils`).copyToStatic
const checkUrl = require(`./utils`).checkUrl

const cheerio = require("cheerio")

/**
 * Parses sourced HTML looking for <img> and <a> tags
 * that come from the WordPress uploads folder
 * Copies over files to Gatsby static folder

 * @param  {string} content               original sourced content
 * @param  {string} uploadsUrl            WordPress uploads url
 * @param  {string} wordPressUrl          WordPress site url
 * @param  {string} pathPrefix            Gatsby pathPrefix
 * @param  {bool}   generateWebp          is WebP required?
 * @param  {object} httpHeaders           custom httpHeaders
 * @param  {object} params                Gatsby API object
 * @return {string}                       processed HTML
 *
 * sourceParser(source, pluginOptions, params)
 */

module.exports = async function sourceParser(
  { content },
  {
    uploadsUrl,
    wordPressUrl,
    pathPrefix = "",
    generateWebp = true,
    httpHeaders = {},
    debugOutput = false,
    displayDownloadInfo = false
  },
  params,
  context
) {
  const {
    actions,
    store,
    cache,
    reporter,
    createNodeId,
    getNodeAndSavePathDependency
  } = params
  const { createNode } = actions
  const supportedExtensions = ["jpeg", "jpg", "png", "webp", "tif", "tiff"]
  const imageOptions = {
    maxWidth: 1380,
    wrapperStyle: ``,
    backgroundColor: `white`,
    linkImagesToOriginal: false,
    showCaptions: false,
    withWebp: true,
    tracedSVG: false,
    pathPrefix
  }
  if (!content) {
    return ``
  }

  // source: gatsby-source-filesystem/src/extend-file-node.js
  // copies file to the `/static` folder

  const replaceAttrIfDownloaded = async (match, selector, attr, url) => {
    url = checkUrl({ url, wordPressUrl, uploadsUrl })

    if (!url) {
      return match
    }

    const fileNode = await downloadMediaFile({
      url,
      cache,
      store,
      imageOptions,
      createNode,
      createNodeId,
      httpHeaders
    })

    const $ = cheerio.load(match, { xmlMode: true, decodeEntities: false })
    const el = $($(selector)[0])
    const details = getNodeAndSavePathDependency(fileNode.id, context.path)
    let staticFile = copyToStatic({ file: fileNode, details, pathPrefix })
    if (debugOutput || displayDownloadInfo) {
      console.log(
        `[gatsby-plugin-wordpress-parser] downloaded file ${url} to ${staticFile}`
      )
    }
    if (attr === "src") {
      el.attr("src", staticFile)
      if (el.is("img")) {
        el.removeAttr("data-full-url")
          .removeAttr("data-link")
          .removeAttr("srcset")
          .removeAttr("sizes")
        if (supportedExtensions.indexOf(fileNode.extension) > -1) {
          try {
            const fluidResult = await convertFileNodeToFluid({
              generateWebp,
              fileNode,
              imageOptions,
              reporter,
              cache
            })
            el.attr("src", fluidResult.originalImg).attr(
              "data-gts-encfluid",
              JSON.stringify(fluidResult).replace(/"/g, "&quot;")
            )
          } catch (e) {
            console.log("[gatsby-plugin-wordpress-parser]  Exception fluid", e)
          }
        }
      }
    } else {
      el.attr("href", staticFile)
    }

    return $.html()
  }

  const replaceBgIfDownloaded = async (match, url) => {
    url = checkUrl({ url, wordPressUrl, uploadsUrl })

    if (!url) {
      return match
    }

    const fileNode = await downloadMediaFile({
      url,
      cache,
      store,
      imageOptions,
      createNode,
      createNodeId,
      httpHeaders
    })
    const details = getNodeAndSavePathDependency(fileNode.id, context.path)
    const staticFile = copyToStatic({ file: fileNode, details, pathPrefix })
    if (debugOutput || displayDownloadInfo) {
      console.log(
        `[gatsby-plugin-wordpress-parser] downloaded file ${url} to ${staticFile}`
      )
    }
    return `background-image:url(${staticFile})`
  }

  const srcRegex = /<(img|video|audio).+?(src)=[\"'](.+?)[\"'].+?>/gm
  content = await replaceAsync(content, srcRegex, replaceAttrIfDownloaded)
  const hrefRegex = /<(a).+?(href)=[\"'](.+?)[\"'].+?>/gm
  content = await replaceAsync(content, hrefRegex, replaceAttrIfDownloaded)
  const bgImageRegex = /background-image:\s*url\(['"]?([^'"\)]*)['"]?\)/gm
  content = await replaceAsync(content, bgImageRegex, replaceBgIfDownloaded)

  return content
}
