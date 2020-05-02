const normalize = require('normalize-path')
const pageTemplate = require.resolve(`../src/templates/page-query.js`)

module.exports = async ({ actions, graphql }, options) => {
  const GET_PAGES = `
  query GET_PAGES {
    allWpPage {
      nodes {
        uri
        isFrontPage
      }
    }
  }
  `

  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpPage.nodes

  pages.map(({ uri, isFrontPage }) => {
    /* dont create page for postsPath */
    if (normalize(`/${uri}`) === normalize(`/${options.postsPath}/`)) {
      return
    }
    console.log(`create page: ${uri}`)
    createPage({
      path: uri,
      component: pageTemplate,
      context: {
        uri,
      },
    })
  })
}
