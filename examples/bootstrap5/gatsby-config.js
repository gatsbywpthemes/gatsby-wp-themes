/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()
const { pathPrefix, ...options } = require("./config")

module.exports = {
  pathPrefix,
  siteMetadata: {
    wordPressUrl: options.wordpressUrl,
    siteUrl: options.siteUrl,
  },
  plugins: [
    {
      resolve: `@gatsbywpthemes/gatsby-theme-wp-bootstrap5`,
      options: {
        ...options,
      },
    },
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-wpcf7`,
      options: {
        wordPressUrl: options.wordPressUrl,
      },
    },
  ],
}
