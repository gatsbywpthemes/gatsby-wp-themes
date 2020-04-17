const addPagination = require('./addPagination.js')

const GET_CATEGORIES = `
  # Define our query variables
  query GET_PARENT_CATEGORIES($first:Int $after:String) {
    wp {
      categories(first: $first after: $after) {
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
const GET_CHILDREN_CATEGORIES = `
  # Define our query variables
  query GET_CHILDREN_CATEGORIES($id: ID! $first:Int $after:String) {
    wp {
      category(id: $id) {
        slug
        children(first: $first after: $after) {
          nodes {
            id
            slug
          }
          pageInfo {
            hasNextPage
            endCursor
          }
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
/**
 * Array to store all pages.
 *
 * @type {Array}
 */

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */

module.exports = async ({ actions, graphql }, options) => {
  const { createPage } = actions
  let allCategories = []
  const categoryTemplatePath = `../src/templates/category-query.js`

  const categoryTemplate = require.resolve(categoryTemplatePath)

  const fetchChildrenCategories = async variables => {
    const { parentSlug, ...queryVariables } = variables
    return await graphql(GET_CHILDREN_CATEGORIES, queryVariables).then(
      ({ data }) => {
        const {
          wp: {
            category: {
              slug,
              children: { nodes, pageInfo },
            },
          },
        } = data
        nodes.forEach(child => {
          child.parentSlug = `${parentSlug}/${slug}`
          allCategories.push(child)
        })
        return getChildren({
          nodes,
          variables,
          pageInfo,
          parentSlug: `${parentSlug}/${slug}`,
        })
      }
    )
  }
  const fetchCategories = async variables =>
    await graphql(GET_CATEGORIES, variables).then(({ data }) => {
      const {
        wp: {
          categories: { nodes, pageInfo },
        },
      } = data
      nodes.forEach(node => {
        node.parentSlug = ``
        allCategories.push(node)
      })
      return getChildren({ nodes, variables, pageInfo })
    })

  const getChildren = async ({
    nodes,
    variables,
    pageInfo,
    parentSlug = '',
  }) => {
    for (let index = 0; index < nodes.length; index++) {
      allCategories = await fetchChildrenCategories({
        id: nodes[index].id,
        first: variables.first,
        after: null,
        parentSlug,
      })
    }
    if (pageInfo.hasNextPage) {
      if (variables.id) {
        return fetchChildrenCategories({
          id: variables.id,
          first: variables.first,
          after: pageInfo.endCursor,
          parentSlug,
        })
      }
      return fetchCategories({
        first: variables.first,
        after: pageInfo.endCursor,
      })
    }
    return allCategories
  }
  const all = await fetchCategories({ first: 100, after: null })
  await addPagination({
    actions,
    graphql,
    options,
    paginationQuery: PAGINATIONQUERY,
    template: categoryTemplate,
    baseType: 'categories',
    paginationType: 'category',
    pathPrefix: 'category',
    allItems: all,
  })
}
