require("dotenv").config()
const {
  title,
  author,
  description,
  social,
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
    social,
  },
  plugins: [
    {
      resolve: `@gatsbywpthemes/gatsby-theme-wp-starter`,
      options: {
        ...options,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        starterSrc: "@gatsbywpthemes/gatsby-theme-wp-starter/src",
        starterPages: "@gatsbywpthemes/gatsby-theme-wp-starter/src/pages",
        starterStyles: "@gatsbywpthemes/gatsby-theme-wp-starter/src/styles",
        starterComponents:
          "@gatsbywpthemes/gatsby-theme-wp-starter/src/components",
        starterUiComponents:
          "@gatsbywpthemes/gatsby-theme-wp-starter/src/components/ui-components",
        starterUtils: "@gatsbywpthemes/gatsby-theme-wp-starter/src/utils",
      },
    },
  ],
}
