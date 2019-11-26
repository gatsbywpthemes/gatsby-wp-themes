const addPagination = require('./addPagination.js')

const BASEQUERY = `
    query GET_CATEGORIES($first: Int) {
      wp {
        categories(first: $first) {
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
const PAGINATIONQUERY = `
  # Define our query variables
  query GET_POSTS_BY_CATEGORY($id: ID! $first:Int $after:String) {
    wp {
      category(id: $id) {
        name
        slug
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
            slug
            postId
          }
        }
      }
    }
  }
`

module.exports = async ({ actions, graphql }, options) => {
  const categoryTemplatePath = options.overrideCategoryTemplate
    ? `../../${options.overrideCategoryTemplate}`
    : `../src/templates/category-query.js`

  const categoryTemplate = require.resolve(categoryTemplatePath)
  await addPagination({
    actions,
    graphql,
    options,
    baseQuery: BASEQUERY,
    paginationQuery: PAGINATIONQUERY,
    template: categoryTemplate,
    baseType: 'categories',
    paginationType: 'category',
    pathPrefix: 'category',
  })
}
