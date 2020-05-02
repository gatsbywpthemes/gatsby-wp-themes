/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()
const {
  author,
  siteUrl,
  social,
  pathPrefix,
  addAlgoliaSearch,
  ...options
} = require("./config")

module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    author,
    wordPressUrl: options.wordpressUrl,
    siteUrl,
    social,
  },
  plugins: [
    {
      resolve: `gatsby-theme-wp-ginger`,
      options: {
        disqus: process.env.GATSBY_DISQUS_NAME,
        addAlgoliaSearch:
          addAlgoliaSearch &&
          process.env.GATSBY_ALGOLIA_APP_ID &&
          process.env.ALGOLIA_ADMIN_KEY &&
          process.env.GATSBY_ALGOLIA_APP_ID,
        ...options,
        pathPrefix: process.env.NODE_ENV === "development" ? "" : pathPrefix,
      },
    },
    {
      resolve: `gatsby-plugin-wpcf7`,
      options: {
        wordPressUrl: options.wordPressUrl,
      },
    },
  ],
}
