const slashes = require('remove-trailing-slash')
const normalize = require('normalize-path')
const pageTemplate = require.resolve(`../src/templates/page-query.js`)
const GET_PAGES = `
  # Define our query variables
  query GET_PAGES($first:Int $after:String) {
    wp {
      pages(first: $first after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          uri
          isFrontPage
          isRestricted
          id
        }
      }
    }
  }
  `
const GET_CHILDREN_PAGES = `
  # Define our query variables
  query GET_CHILDREN_PAGES($id: ID! $first:Int $after:String) {
    wp {
      page(id: $id) {
        childPages(first: $first after: $after) {
          nodes {
            uri
            isFrontPage
            isRestricted
            id
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
let allPages = []

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */

module.exports = async ({ actions, graphql }, options) => {
  const { createPage } = actions

  const fetchChildrenPages = async (variables) =>
    await graphql(GET_CHILDREN_PAGES, variables).then(({ data }) => {
      const {
        wp: {
          page: {
            childPages: { nodes, pageInfo },
          },
        },
      } = data
      nodes.forEach((child) => {
        allPages.push(child)
      })
      return getChildren({ nodes, variables, pageInfo })
    })
  const fetchPages = async (variables) =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      const {
        wp: {
          pages: { nodes, pageInfo },
        },
      } = data
      nodes.forEach((node) => {
        allPages.push(node)
      })
      return getChildren({ nodes, variables, pageInfo })
    })

  const getChildren = async ({ nodes, variables, pageInfo }) => {
    for (let index = 0; index < nodes.length; index++) {
      allPages = await fetchChildrenPages({
        id: nodes[index].id,
        first: variables.first,
        after: null,
      })
    }
    if (pageInfo && pageInfo.hasNextPage) {
      if (variables.id) {
        return fetchChildrenPages({
          id: variables.id,
          first: variables.first,
          after: pageInfo.endCursor,
        })
      }
      return fetchPages({
        first: variables.first,
        after: pageInfo.endCursor,
      })
    }
    return allPages
  }

  await fetchPages({ first: 100, after: null }).then((allPages) => {
    allPages.map((page) => {
      /* dont create page if is restricted */
      if (page.isRestricted) {
        return
      }
      /* dont create page for postsPath */
      if (
        slashes(normalize(`/${page.uri}`)) ===
        slashes(normalize(`/${options.postsPath}`))
      ) {
        return
      }

      const path =
        (page.isFrontPage && options.postsPath !== `/`) ||
        (page.isFrontPage && options.postsPath === false)
          ? `/`
          : `/${page.uri}`
      console.log(`create page: ${path}`)
      createPage({
        path,
        component: pageTemplate,
        context: {
          ...page,
          postsPath: options.postsPath,
          wordPressUrl: options.wordPressUrl,
          uploadsUrl: options.uploadsUrl,
        },
      })
    })
  })
}
