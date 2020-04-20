const { paginate } = require(`gatsby-awesome-pagination`)

const GET_TAGS = `
  query GET_TAGS {
    allWpTag {
      nodes {
        slug
        uri
      }
    }
  }
  `

const GET_POSTS_BY_TAG = `
  query GET_POSTS_BY_TAG($slug: String!) {
    wpTag(slug: { eq: $slug }) {
      posts {
        nodes {
          id
        }
      }
    }
  }
  `
module.exports = async ({ actions, graphql }, options) => {
  const templatePath = `../src/templates/tag-query.js`
  const template = require.resolve(templatePath)
  const { createPage } = actions
  const tagsQuery = await graphql(GET_TAGS)
  const tags = tagsQuery.data.allWpTag.nodes
  for (const tag of tags) {
    const postsByQuery = await graphql(GET_POSTS_BY_TAG, { slug: tag.slug })
    const items = postsByQuery.data.wpTag.posts.nodes
    const pathPrefix = ({ pageNumber }) =>
      pageNumber === 0 ? `/${tag.uri}` : `/${tag.uri}page`
    paginate({
      createPage,
      pathPrefix,
      component: template,
      items,
      itemsPerPage: options.postsPerPage,
      context: {
        slug: tag.slug,
      },
    })
  }
}
