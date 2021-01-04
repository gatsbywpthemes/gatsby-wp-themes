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
        ${includeYoast ? taxonomySeoFromWP : ``}
      }
    }
  }
  `

  const GET_POSTS_BY_TAG = `
  query GET_POSTS_BY_TAG($slug: String!) {
    allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: $slug}}}}}) {
      nodes {
        title
      }
    }
  }
  `
  const template = require.resolve(templatePath)
  const { createPage } = actions
  const tagsQuery = await graphql(GET_TAGS)
  const tags = tagsQuery.data.allWpTag.nodes
  for (const tag of tags) {
    const postsByQuery = await graphql(GET_POSTS_BY_TAG, { slug: tag.slug })
    if (
      postsByQuery &&
      postsByQuery.data &&
      postsByQuery.data.allWpPost &&
      postsByQuery.data.allWpPost.nodes &&
      postsByQuery.data.allWpPost.nodes.length
    ) {
      const items = postsByQuery.data.allWpPost.nodes
      const pathPrefix = ({ pageNumber }) =>
        pageNumber === 0
          ? tag.uri
          : normalize(`${tag.uri}${options.paginationPrefix}`)
      paginate({
        createPage,
        pathPrefix,
        component: template,
        items,
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
    }
  }
}
