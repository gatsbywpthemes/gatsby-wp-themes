const { createRemoteFileNode } = require("gatsby-source-filesystem")
const { fluid } = require(`gatsby-plugin-sharp`)
const path = require(`path`)
const fs = require(`fs-extra`)
const URIParser = require("urijs")

const downloadMediaFile = async ({
  url,
  cache,
  store,
  createNode,
  createNodeId,
  httpHeaders = {}
}) => {
  let fileNode = false
  try {
    fileNode = await createRemoteFileNode({
      url,
      store,
      cache,
      createNode,
      createNodeId,
      httpHeaders
    })
  } catch (e) {
    console.log("FAILED to download " + url)
  }

  return fileNode
}

const convertFileNodeToFluid = async ({
  generateWebp = true,
  fileNode,
  imageOptions,
  reporter,
  cache
}) => {
  let fluidResult = await fluid({
    file: fileNode,
    args: imageOptions,
    reporter,
    cache
  })

  if (generateWebp) {
    const fluidWebp = await fluid({
      file: fileNode,
      args: { ...imageOptions, toFormat: "webp" },
      reporter,
      cache
    })

    fluidResult.srcSetWebp = fluidWebp.srcSet
  }

  return fluidResult
}

const replaceAsync = async (str, regex, asyncFn) => {
  const promises = []
  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args)
    promises.push(promise)
  })
  const data = await Promise.all(promises)
  return str.replace(regex, () => data.shift())
}

const copyToStatic = ({ file, details, pathPrefix }) => {
  const fileName = `${file.name}-${file.internal.contentDigest}${details.ext}`

  const publicPath = path.join(process.cwd(), `public`, `static`, fileName)

  if (!fs.existsSync(publicPath)) {
    fs.copy(details.absolutePath, publicPath, err => {
      if (err) {
        console.error(
          `error copying file from ${details.absolutePath} to ${publicPath}`,
          err
        )
      }
    })
  }

  return `${pathPrefix}/static/${fileName}`
}

const checkUrl = ({ url, wordPressUrl, uploadsUrl }) => {
  if (!url) {
    return false
  }
  let urlNoProtocol = url.replace(/^https?:/i, "")
  let uploadsUrlNoProtocol = uploadsUrl.replace(/^https?:/i, "")
  // gets relative uploads url
  let uploadsUrlRelative = new URIParser(uploadsUrl).path()
  // handling relative url
  const urlParsed = new URIParser(url)
  const isUrlRelative = urlParsed.is("relative")

  // if not relative root url or not matches uploads dir
  if (
    !(isUrlRelative && url.startsWith(uploadsUrlRelative)) &&
    !urlNoProtocol.startsWith(uploadsUrlNoProtocol)
  ) {
    return false
  }

  if (isUrlRelative) {
    url = urlParsed.absoluteTo(wordPressUrl).href()
  }
  return url
}

const debugLog = (debugOutput, ...args) => {
  debugOutput && console.log(...args)
}

exports.downloadMediaFile = downloadMediaFile
exports.convertFileNodeToFluid = convertFileNodeToFluid
exports.replaceAsync = replaceAsync
exports.copyToStatic = copyToStatic
exports.checkUrl = checkUrl
exports.debugLog = debugLog
