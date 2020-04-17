const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)

const GET_POSTS = `
  query GET_POSTS($limit:Int ){
    allWpPost(limit: $limit) {
      nodes {
        title
        uri
      }
    }
  }
  `

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql }, options) => {
  const blogTemplatePath = `../src/templates/posts-query.js`

  const blogTemplate = require.resolve(blogTemplatePath)
  const postTemplatePath = `../src/templates/post-query.js`
  const postTemplate = require.resolve(postTemplatePath)
  const { postsPath, paginationPrefix, postsPerPage } = options

  const { createPage } = actions

  const postsQuery = await graphql(GET_POSTS)
  const posts = postsQuery.data.allWpPost.nodes

  posts.map(post => {
    createPage({
      path: `/${post.uri}`,
      component: postTemplate,
      context: {
        uri: post.uri,
      },
    })
  })
  const pathPrefix = ({ pageNumber, numberOfPages }) =>
    pageNumber === 0 ? `/${postsPath}` : `/${postsPath}/page`
  paginate({
    createPage,
    pathPrefix,
    component: blogTemplate,
    items: posts,
    itemsPerPage: postsPerPage,
  })
}
