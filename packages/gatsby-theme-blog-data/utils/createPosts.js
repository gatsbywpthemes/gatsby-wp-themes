const { paginate } = require(`gatsby-awesome-pagination`)
const normalize = require('normalize-path')

const GET_POSTS = `
  query GET_POSTS($limit:Int ){
    allWpPost(limit: $limit) {
      edges {
        previous {
          uri
        }
        node {
          uri
        }
        next {
          uri
        }
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
  const posts = postsQuery.data.allWpPost.edges

  posts.map(post => {
    createPage({
      path: `/${post.node.uri}`,
      component: postTemplate,
      context: {
        uri: post.node.uri,
        prev: post.previous ? post.previous.uri : null,
        next: post.next ? post.next.uri : null,
      },
    })
  })
  const pathPrefix = ({ pageNumber }) =>
    pageNumber === 0
      ? normalize(`/${postsPath}`)
      : normalize(`/${postsPath}/${paginationPrefix}`)
  paginate({
    createPage,
    pathPrefix,
    component: blogTemplate,
    items: posts,
    itemsPerPage: postsPerPage,
  })
}
