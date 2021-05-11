const { paginate } = require(`gatsby-awesome-pagination`)
const normalize = require('normalize-path')
const authorSeoFromWP = require(`./seo/authorSeoFromWP.js`)

module.exports = async ({ actions, graphql }, options) => {
  const includeYoast = options.seoFromWP
  const templatePath = `../src/templates/user-query.js`
  const template = require.resolve(templatePath)
  const { createPage } = actions
  const GET_USERS = `
  query GET_USERS {
    allWpUser {
      nodes {
        slug
        uri
        posts {
          nodes {
            id
          }
        }
        ${includeYoast ? authorSeoFromWP : ``}
      }
    }
  }
  `
  const usersQuery = await graphql(GET_USERS)
  const users = usersQuery.data.allWpUser.nodes

  return Promise.all(
    users.map((user) =>
      paginate({
        createPage,
        pathPrefix: ({ pageNumber }) =>
          pageNumber === 0
            ? user.uri
            : normalize(`${user.uri}${options.paginationPrefix}`),
        component: template,
        items: user.posts.nodes,
        itemsPerPage: options.postsPerPage,
        context: {
          slug: user.slug,
          yoastSeo: includeYoast,
          seo: {
            page: user.seo,
            general: options.generalSeoSettings,
          },
        },
      })
    )
  )
}
