const queries = require("./src/queries")
require("dotenv").config()

module.exports = options => {
  return {
    siteMetadata: {
      title: `Blog Title Placeholder`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
      url: `http://exemple.com`,
      social: [
        {
          name: `twitter`,
          url: `https://twitter.com/gatsbyjs`
        },
        {
          name: `GitHub`,
          url: `https://github.com/gatsbyjs`
        }
      ]
    },
    plugins: [
      {
        resolve: `gatsby-plugin-algolia`,
        options: {
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_ADMIN_KEY,
          queries,
          chunkSize: 10000 // default: 1000
        }
      }
    ]
  }
}
