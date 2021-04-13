require("dotenv").config()
const {
  title,
  author,
  description,
  pathPrefix,
  ...options
} = require("./config")
const siteUrl = process.env.GATSBY_SITE_URL || options.siteUrl

module.exports = {
  pathPrefix,
  siteMetadata: {
    title,
    description,
    author,
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl,
  },
  plugins: [
    {
      resolve: `@gatsbywpthemes/gatsby-theme-wp-base`,
      options: {
        ...options,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        baseSrc: "@gatsbywpthemes/gatsby-theme-wp-base/src",
        basePages: "@gatsbywpthemes/gatsby-theme-wp-base/src/pages",
        baseStyles: "@gatsbywpthemes/gatsby-theme-wp-base/src/styles",
        baseComponents: "@gatsbywpthemes/gatsby-theme-wp-base/src/components",
        baseUiComponents:
          "@gatsbywpthemes/gatsby-theme-wp-base/src/components/ui-components",
        baseUtils: "@gatsbywpthemes/gatsby-theme-wp-base/src/utils",
      },
    },
  ],
}
