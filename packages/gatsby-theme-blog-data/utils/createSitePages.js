const normalize = require('normalize-path')
const pageTemplate = require.resolve(`../src/templates/page-query.js`)
const PageSeoFromWP = require(`./seo/pageSeoFromWP.js`)

module.exports = async ({ actions, graphql }, options) => {
  const includeYoast = options.seoFromWP

  const GET_PAGES = `
  query GET_PAGES {
    allWpPage(sort: { order: DESC, fields: date }) {
      nodes {
        uri
        ${includeYoast ? PageSeoFromWP : ``}
      }
    }
  }
  `

  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpPage.nodes

  pages.map(({ uri, seo }) => {
    /* don't create page for postsPath */
    if (normalize(`/${uri}`) === normalize(`/${options.postsPath}/`)) {
      return
    }
    if (options.pageCreateDebugOutput) {
      console.log(`[gatsby-theme-blog-data] create page: ${uri}`)
    }
    createPage({
      path: uri,
      component: pageTemplate,
      context: {
        uri,
        yoastSeo: includeYoast,
        seo: {
          page: seo,
          general: options.generalSeoSettings,
        },
      },
    })
  })
}
