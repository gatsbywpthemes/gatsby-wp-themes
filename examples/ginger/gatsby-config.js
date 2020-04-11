/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const { author, siteUrl, social, pathPrefix, ...options } = require("./config")

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
