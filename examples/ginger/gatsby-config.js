/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()
const {
  author,
  social,
  pathPrefix,
  addDisqusComments,
  twitterSummaryCardImage,
  ...options
} = require("./config")

module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    author,
    wordPressUrl: options.wordpressUrl,
    siteUrl: options.siteUrl,
    social,
  },
  plugins: [
    {
      resolve: `gatsby-theme-wp-ginger`,
      options: {
        disqus:
          addDisqusComments && process.env.GATSBY_DISQUS_NAME
            ? process.env.GATSBY_DISQUS_NAME
            : "",
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
