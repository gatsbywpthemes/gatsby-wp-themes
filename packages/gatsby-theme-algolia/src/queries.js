const striptags = require("striptags")

const postQuery = `{
  wp {
    posts(first: 100) {
      nodes {
        title
        content
        excerpt
        date
        slug
        author {
          name
        }
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
}
`

const pageQuery = `{
wp {
    pages(first: 100) {
      nodes {
        content
        title
        slug
      }
    }
  }
}`
const settings = {
  minWordSizefor1Typo: 6,
  attributesToSnippet: [`content:20`]
}

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => {
      data.wp.posts.nodes.forEach(el => {
        el.content = el.content
          ? (el.content = el.content
              ? striptags(el.content.replace(/&nbsp;/g, " "))
              : el.content)
          : el.content
      })
      return data.wp.posts.nodes
    },
    indexName: `Posts`,
    settings
  },
  {
    query: pageQuery,
    transformer: ({ data }) => {
      data.wp.pages.nodes.forEach(el => {
        el.content = el.content
          ? striptags(el.content.replace(/&nbsp;/g, " "))
          : el.content
      })
      return data.wp.pages.nodes
    },
    indexName: `Pages`,
    settings
  }
]

module.exports = queries
