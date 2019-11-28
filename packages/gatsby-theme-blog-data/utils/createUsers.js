const addPagination = require('./addPagination.js')

const GET_USERS = `
    query GET_USERS($first: Int $after:String) {
      wp {
        users(first: $first after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
            slug
          }
        }
      }
    }
  `
const GET_POSTS_BY_USER = `
  # Define our query variables
  query GET_POSTS_BY_USER($id: ID! $first:Int $after:String) {
    wp {
      user(id: $id) {
        name
        slug
        id
        description
        avatar {
          url
        }
        posts(first: $first after: $after) {
          pageInfo {
              # If true, we need to ask for more data.
              hasNextPage

              # This cursor will be used for the value for $after
              # if we need to ask for more data
              endCursor
          }
          nodes {
            id
            uri
            postId
            title
          }
        }
      }
    }
  }
`
module.exports = async ({ actions, graphql }, options) => {
  const userTemplatePath = options.overrideUserTemplate
    ? `../../${options.overrideUserTemplate}`
    : `../src/templates/user-query.js`

  const userTemplate = require.resolve(userTemplatePath)
  await addPagination({
    actions,
    graphql,
    options,
    baseQuery: GET_USERS,
    paginationQuery: GET_POSTS_BY_USER,
    template: userTemplate,
    baseType: 'users',
    paginationType: 'user',
    pathPrefix: 'author',
  })
}
