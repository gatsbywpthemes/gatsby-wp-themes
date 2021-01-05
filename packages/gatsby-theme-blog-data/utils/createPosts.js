const { paginate } = require(`gatsby-awesome-pagination`)
const normalize = require('normalize-path')
const PageSeoFromWP = require(`./seo/pageSeoFromWP.js`)

module.exports = async ({ actions, graphql }, options) => {
  const includeYoast = options.seoFromWP
  const blogTemplatePath = `../src/templates/posts-query.js`

  const blogTemplate = require.resolve(blogTemplatePath)
  const postTemplatePath = `../src/templates/post-query.js`
  const postTemplate = require.resolve(postTemplatePath)
  const { postsPath, paginationPrefix, postsPerPage } = options
  const { createPage } = actions

  const GET_POSTS = `
  query GET_POSTS($limit:Int){
    allWpPost(limit: $limit, sort: {order: DESC, fields: date}) {
      edges {
        previous {
          uri
        }
        node {
          uri
          ${includeYoast ? PageSeoFromWP : ``}
        }
        next {
          uri
        }
      }
    }
  }
  `
  const GET_POSTS_PAGE = `
  query GET_PAGE($uri: String) {
      wpPage(uri: { eq: $uri }) {
        title
        ${includeYoast ? PageSeoFromWP : ``}
      }
    }
  `

  const queries = [graphql(GET_POSTS)]
  if (postsPath && postsPath !== '/') {
    queries.push(graphql(GET_POSTS_PAGE, { uri: postsPath }))
  }
  const [postsQuery, postsPageQuery] = await Promise.all(queries)

  const posts = postsQuery.data.allWpPost.edges

  posts.map((post) => {
    createPage({
      path: post.node.uri,
      component: postTemplate,
      context: {
        uri: post.node.uri,
        prev: post.previous ? post.previous.uri : null,
        next: post.next ? post.next.uri : null,
        yoastSeo: includeYoast,
        seo: {
          page: post.node.seo,
          general: options.generalSeoSettings,
        },
      },
    })
  })

  if (!postsPath) {
    return
  }

  const pathPrefix = ({ pageNumber }) => {
    return pageNumber === 0
      ? postsPath
      : normalize(`${postsPath}${paginationPrefix}`)
  }

  paginate({
    createPage,
    pathPrefix,
    component: blogTemplate,
    items: posts,
    itemsPerPage: postsPerPage,
    context: {
      title: postsPageQuery && postsPageQuery.data.wpPage.title,
      seo: {
        page: postsPageQuery && postsPageQuery.data.wpPage.seo,
        general: options.generalSeoSettings,
      },
    },
  })
}
