/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()
const {
  social,
  pathPrefix,
  addDisqusComments,
  ...options
} = require("./config")

module.exports = {
  pathPrefix,
  siteMetadata: {
    wordPressUrl: options.wordpressUrl,
    siteUrl: options.siteUrl,
    social,
  },
  plugins: [
    {
      resolve: `@gatsbywpthemes/gatsby-theme-wp-bootstrap5`,
      options: {
        disqus:
          addDisqusComments && process.env.GATSBY_DISQUS_NAME
            ? process.env.GATSBY_DISQUS_NAME
            : "",
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
