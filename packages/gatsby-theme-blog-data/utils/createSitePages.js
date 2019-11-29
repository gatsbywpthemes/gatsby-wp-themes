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
          ...BuildQueryPageFields
        }
      }
    }
  }
  fragment BuildQueryPageFields on WP_Page {
    uri
      parent {
        ... on WP_Page {
          id
          uri
        }
      }
    isFrontPage
    isRestricted
    id
    pageId
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
            pageId
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
 * Array to store allpagess. We make paginated requests
 * to WordPress to get allpagess, and once we have all pages,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPages = []

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */

module.exports = async ({ actions, graphql }, options) => {
  const { createPage } = actions
  let allPages = []
  const fetchChildrenPages = async variables =>
    await graphql(GET_CHILDREN_PAGES, variables).then(({ data }) => {
      const {
        wp: {
          page: {
            childPages: {
              nodes,
              pageInfo: { hasNextPage, endCursor },
            },
          },
        },
      } = data
      nodes.forEach(child => {
        allPages.push(child)
      })
      if (hasNextPage) {
        return fetchChildrenPages({
          id: variables.id,
          first: variables.first,
          after: endCursor,
        })
      }
      return allPages
    })
  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      const {
        wp: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const getChildren = async () => {
        for (let index = 0; index < nodes.length; index++) {
          allPages.push(nodes[index])
          allPages = await fetchChildrenPages({
            id: nodes[index].id,
            first: variables.first,
            after: null,
          })
        }
        if (hasNextPage) {
          return fetchPages({
            first: variables.first,
            after: endCursor,
          })
        }
        return allPages
      }

      return getChildren()
    })

  await fetchPages({ first: 100, after: null }).then(allPages => {
    allPages.map(page => {
      /* dont create page for postsPath */
      if (page.uri === options.postsPath) {
        return
      }
      const path = page.isFrontPage ? `/` : `/${page.uri}`
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
      })
    })
  })
}
