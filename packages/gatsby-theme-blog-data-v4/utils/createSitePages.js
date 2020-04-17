const slashes = require('remove-trailing-slash')
const normalize = require('normalize-path')
const pageTemplate = require.resolve(`../src/templates/page-query.js`)

module.exports = async ({ actions, graphql }, options) => {
  const GET_PAGES = `
  query GET_PAGES {
    allWpPage {
      nodes {
        title
        uri
        isFrontPage
      }
    }
  }
  `

  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpPage.nodes

  pages.map(page => {
    /* dont create page for postsPath */
    if (
      slashes(normalize(`/${page.uri}`)) ===
      slashes(normalize(`/${options.postsPath}`))
    ) {
      return
    }

    const path =
      (page.isFrontPage && options.postsPath !== `/`) ||
      (page.isFrontPage && options.postsPath === false)
        ? `/`
        : `/${page.uri}`
    console.log(`create page: ${path}`)
    createPage({
      path,
      component: pageTemplate,
      context: {
        uri: page.uri,
        postsPath: options.postsPath,
        wordPressUrl: options.wordPressUrl,
        uploadsUrl: options.uploadsUrl,
      },
    })
  })
}
