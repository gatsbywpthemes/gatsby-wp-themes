const { paginate } = require(`gatsby-awesome-pagination`)

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

const GET_POSTS_BY_USER = `
  query GET_POSTS_BY_USER($slug: String!) {
    wpUser(slug: { eq: $slug }) {
      posts {
        nodes {
          id
        }
      }
    }
  }
  `
module.exports = async ({ actions, graphql }, options) => {
  const templatePath = `../src/templates/user-query.js`
  const template = require.resolve(templatePath)
  const { createPage } = actions
  const usersQuery = await graphql(GET_USERS)
  const users = usersQuery.data.allWpUser.nodes
  for (const user of users) {
    const postsByQuery = await graphql(GET_POSTS_BY_USER, {
      slug: user.slug,
    })
    const items = postsByQuery.data.wpUser.posts.nodes
    const pathPrefix = ({ pageNumber }) =>
      pageNumber === 0 ? `/${user.uri}` : `/${user.uri}page`
    paginate({
      createPage,
      pathPrefix,
      component: template,
      items,
      itemsPerPage: options.postsPerPage,
      context: {
        slug: user.slug,
      },
    })
  }
}
