//const pageTemplate = require.resolve(`../src/templates/page-query.js`)
//const addPagination = require('./addPagination.js')

const GET_CATEGORIES1 = `
  # Define our query variables
  query GET_CATEGORIES1($first:Int $after:String) {
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
/**
 * Array to store all pages.
 *
 * @type {Array}
 */
let allCategories = []

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */

module.exports = async ({ actions, graphql }, options) => {
  const { createPage } = actions

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
    await graphql(GET_CATEGORIES1, variables).then(({ data }) => {
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

  await fetchCategories({ first: 100, after: null }).then(all => {
    all.map(item => {
      console.log(item)
      /*       const path = page.isFrontPage ? `/` : `/${page.uri}`
      console.log(`create page: ${page.uri}`)
      createPage({
        path,
        component: pageTemplate,
        context: {
          ...page,
          postsPrefix: options.postsPrefix,
          postsPath: options.postsPath,
          wordPressUrl: options.wordPressUrl,
          uploadsUrl: options.uploadsUrl,
        },
      }) */
    })
  })
}
