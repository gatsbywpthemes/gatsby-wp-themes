/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const fs = require("fs")
require("dotenv").config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    ".env",
})
const { author, pathPrefix, ...options } = require("./config")
const siteUrl = process.env.GATSBY_SITE_URL || options.siteUrl

module.exports = {
  pathPrefix,
  siteMetadata: {
    author,
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl,
  },
  plugins: [
    {
      resolve: `@gatsbywpthemes/gatsby-theme-wp-ginger-pro`,
      options: {
        ...options,
        wordPressUrl: process.env.GATSBY_WP_URL,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        gingerThemeSrc: "@gatsbywpthemes/gatsby-theme-wp-ginger-pro/src",
        gingerThemePages:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-pro/src/pages",
        gingerThemeStyles:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-pro/src/styles",
        gingerThemeComponents:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-pro/src/components",
        gingerThemeUiComponents:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-pro/src/components/ui-components",
        gingerThemeUtils:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-pro/src/utils",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
  ],
}
