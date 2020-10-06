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
      resolve: `gatsby-theme-blog-data`,
      options: {
        disqus:
          addDisqusComments && process.env.GATSBY_DISQUS_NAME
            ? process.env.GATSBY_DISQUS_NAME
            : "",
        ...options,
        pathPrefix: process.env.NODE_ENV === "development" ? "" : pathPrefix,
      },
    },
  ],
}
