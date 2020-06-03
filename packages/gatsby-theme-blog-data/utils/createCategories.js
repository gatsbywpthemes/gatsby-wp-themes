const { paginate } = require(`gatsby-awesome-pagination`)

const GET_CATEGORIES = `
  query GET_CATEGORIES {
    allWpCategory {
      nodes {
        slug
        uri
      }
    }
  }
  `

const GET_POSTS_BY_CATEGORY = `
query GET_POSTS_BY_CATEGORY($slug: String!) {
  allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: $slug}}}}}) {
    nodes {
      title
    }
  }
}
  `
module.exports = async ({ actions, graphql }, options) => {
  const templatePath = `../src/templates/category-query.js`
  const template = require.resolve(templatePath)
  const { createPage } = actions
  const categoriesQuery = await graphql(GET_CATEGORIES)
  const categories = categoriesQuery.data.allWpCategory.nodes
  for (const category of categories) {
    const postsByQuery = await graphql(GET_POSTS_BY_CATEGORY, {
      slug: category.slug,
    })
    if (
      postsByQuery &&
      postsByQuery.data &&
      postsByQuery.data.allWpPost &&
      postsByQuery.data.allWpPost.nodes &&
      postsByQuery.data.allWpPost.nodes.length
    ) {
      const items = postsByQuery.data.allWpPost.nodes
      const pathPrefix = ({ pageNumber }) =>
        pageNumber === 0 ? category.uri : `${category.uri}page`
      paginate({
        createPage,
        pathPrefix,
        component: template,
        items,
        itemsPerPage: options.postsPerPage,
        context: {
          slug: category.slug,
        },
      })
    }
  }
}
