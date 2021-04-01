require("dotenv").config()
const {
  title,
  author,
  description,
  pathPrefix,
  ...options
} = require("./config")

module.exports = {
  pathPrefix,
  siteMetadata: {
    title,
    description,
    author,
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl: options.siteUrl,
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
        starterSrc: "@gatsbywpthemes/gatsby-theme-wp-base/src",
        starterPages: "@gatsbywpthemes/gatsby-theme-wp-base/src/pages",
        starterStyles: "@gatsbywpthemes/gatsby-theme-wp-base/src/styles",
        starterComponents:
          "@gatsbywpthemes/gatsby-theme-wp-base/src/components",
        starterUiComponents:
          "@gatsbywpthemes/gatsby-theme-wp-base/src/components/ui-components",
        starterUtils: "@gatsbywpthemes/gatsby-theme-wp-base/src/utils",
      },
    },
  ],
}
