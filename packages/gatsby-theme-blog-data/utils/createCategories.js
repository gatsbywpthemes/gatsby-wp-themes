const { paginate } = require(`gatsby-awesome-pagination`)
const normalize = require('normalize-path')
const taxonomySeoFromWP = require(`./seo/taxonomySeoFromWP.js`)

module.exports = async ({ actions, graphql }, options) => {
  const templatePath = `../src/templates/category-query.js`
  const includeYoast = options.seoFromWP
  const template = require.resolve(templatePath)
  const GET_CATEGORIES = `
  query GET_CATEGORIES {
    allWpCategory {
      nodes {
        slug
        uri
        count
        posts {
          nodes {
            id
          }
        }
        ${includeYoast ? taxonomySeoFromWP : ``}
      }
    }
  }
  `

  const { createPage } = actions
  const categoriesQuery = await graphql(GET_CATEGORIES)
  const categories = categoriesQuery.data.allWpCategory.nodes

  return Promise.all(
    categories
      .filter((category) => category.count)
      .map((category) =>
        paginate({
          createPage,
          pathPrefix: ({ pageNumber }) =>
            pageNumber === 0
              ? category.uri
              : normalize(`${category.uri}${options.paginationPrefix}`),
          component: template,
          items: category.posts.nodes,
          itemsPerPage: options.postsPerPage,
          context: {
            slug: category.slug,
            yoastSeo: includeYoast,
            seo: {
              page: category.seo,
              general: options.generalSeoSettings,
            },
          },
        })
      )
  )
}
