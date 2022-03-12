const { paginate } = require(`gatsby-awesome-pagination`)
const normalize = require('normalize-path')
const taxonomySeoFromWP = require(`./seo/taxonomySeoFromWP.js`)

module.exports = async ({ actions, graphql }, options) => {
  const templatePath = `../src/templates/tag-query.js`
  const includeYoast = options.seoFromWP
  const GET_TAGS = `
  query GET_TAGS {
    allWpTag {
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

  const template = require.resolve(templatePath)
  const { createPage } = actions
  const tagsQuery = await graphql(GET_TAGS)
  const tags = tagsQuery.data.allWpTag.nodes

  return Promise.all(
    tags
      .filter((tag) => tag.count)
      .map((tag) =>
        paginate({
          createPage,
          pathPrefix: ({ pageNumber }) =>
            pageNumber === 0
              ? tag.uri
              : normalize(`${tag.uri}${options.paginationPrefix}`),
          component: template,
          items: tag.posts.nodes,
          itemsPerPage: options.postsPerPage,
          context: {
            slug: tag.slug,
            yoastSeo: includeYoast,
            seo: {
              page: tag.seo,
              general: options.generalSeoSettings,
            },
          },
        })
      )
  )
}
