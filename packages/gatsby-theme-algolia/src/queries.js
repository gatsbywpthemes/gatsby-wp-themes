const striptags = require("striptags")

const postQuery = `{
  allWpPost(limit: 1000) {
    nodes {
      title
      content
      excerpt
      date
      uri
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
`

const pageQuery = `{
  allWpPage(limit: 1000) {
    nodes {
      content
      title
      slug
      uri
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
      data.allWpPost.nodes.forEach(el => {
        el.content = el.content
          ? (el.content = el.content
              ? striptags(el.content.replace(/&nbsp;/g, " "))
              : el.content)
          : el.content
      })
      return data.allWpPost.nodes
    },
    indexName: `Posts`,
    settings
  },
  {
    query: pageQuery,
    transformer: ({ data }) => {
      data.allWpPage.nodes.forEach(el => {
        el.content = el.content
          ? striptags(el.content.replace(/&nbsp;/g, " "))
          : el.content
      })
      return data.allWpPage.nodes
    },
    indexName: `Pages`,
    settings
  }
]

module.exports = queries
