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
      resolve: `@gatsbywpthemes/gatsby-theme-wp-ginger-chakra`,
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
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-wpcf7`,
      options: {
        wordPressUrl: options.wordPressUrl,
      },
    },
  ],
}
