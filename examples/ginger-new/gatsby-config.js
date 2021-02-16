/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()
const { author, pathPrefix, ...options } = require("./config")

module.exports = {
  pathPrefix,
  siteMetadata: {
    author,
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl: options.siteUrl,
  },
  plugins: [
    {
      resolve: `@gatsbywpthemes/gatsby-theme-wp-ginger-chakra`,
      options: {
        ...options,
        wordPressUrl: process.env.GATSBY_WP_URL,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        gingerThemeSrc: "@gatsbywpthemes/gatsby-theme-wp-ginger-chakra/src",
        gingerThemePages:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-chakra/src/pages",
        gingerThemeStyles:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-chakra/src/styles",
        gingerThemeComponents:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-chakra/src/components",
        gingerThemeUiComponents:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-chakra/src/components/ui-components",
        gingerThemeUtils:
          "@gatsbywpthemes/gatsby-theme-wp-ginger-chakra/src/utils",
      },
    },
  ],
}
