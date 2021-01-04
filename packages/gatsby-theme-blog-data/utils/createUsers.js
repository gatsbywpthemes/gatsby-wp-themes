const { paginate } = require(`gatsby-awesome-pagination`)
const normalize = require('normalize-path')
const authorSeoFromWP = require(`./seo/authorSeoFromWP.js`)

const GET_USERS = `
  query GET_USERS {
    allWpUser {
      nodes {
        slug
        uri
      }
    }
  }
  `

module.exports = async ({ actions, graphql }, options) => {
  const includeYoast = options.seoFromWP
  const templatePath = `../src/templates/user-query.js`
  const template = require.resolve(templatePath)
  const { createPage } = actions
  const usersQuery = await graphql(GET_USERS)
  const users = usersQuery.data.allWpUser.nodes
  const GET_POSTS_BY_USER = `
  query GET_POSTS_BY_USER($slug: String!) {
    wpUser(slug: {eq: $slug }) {
      ${includeYoast ? authorSeoFromWP : ``}
      posts {
        nodes {
          id
        }
      }
    }
  }
  `

  for (const user of users) {
    const postsByQuery = await graphql(GET_POSTS_BY_USER, {
      slug: user.slug,
    })
    if (postsByQuery.data.wpUser.posts.nodes.length) {
      const items = postsByQuery.data.wpUser.posts.nodes
      const pathPrefix = ({ pageNumber }) =>
        pageNumber === 0
          ? user.uri
          : normalize(`${user.uri}${options.paginationPrefix}`)
      paginate({
        createPage,
        pathPrefix,
        component: template,
        items,
        itemsPerPage: options.postsPerPage,
        context: {
          slug: user.slug,
          yoastSeo: includeYoast,
          seo: {
            page: postsByQuery.data.wpUser.seo,
            general: options.generalSeoSettings,
          },
        },
      })
    }
  }
}
