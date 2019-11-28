const addPagination = require('./addPagination.js')
const GET_TAGS = `
    query GET_TAGS($first: Int $after:String) {
      wp {
        tags(first: $first after: $after) {
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
  query GET_POSTS_BY_TAG($id: ID! $first:Int $after:String) {
    wp {
      tag(id: $id) {
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
  const tagTemplatePath = options.overrideTagTemplate
    ? `../../${options.overrideTagTemplate}`
    : `../src/templates/tag-query.js`

  const tagTemplate = require.resolve(tagTemplatePath)
  await addPagination({
    actions,
    graphql,
    options,
    baseQuery: GET_TAGS,
    paginationQuery: PAGINATIONQUERY,
    template: tagTemplate,
    baseType: 'tags',
    paginationType: 'tag',
    pathPrefix: 'tag',
  })
}
