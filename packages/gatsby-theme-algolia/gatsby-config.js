const queries = require("./src/queries")
require("dotenv").config()

module.exports = (options) => {
  return {
    siteMetadata: {
      url: `http://exemple.com`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-algolia`,
        options: {
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_ADMIN_KEY,
          queries,
          chunkSize: 10000, // default: 1000
        },
      },
    ],
  }
}
