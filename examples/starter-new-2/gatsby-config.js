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
      resolve: `@gatsbywpthemes/gatsby-theme-starter`,
      options: {
        ...options,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        starterSrc: "@gatsbywpthemes/gatsby-theme-starter/src",
        starterPages: "@gatsbywpthemes/gatsby-theme-starter/src/pages",
        starterStyles: "@gatsbywpthemes/gatsby-theme-starter/src/styles",
        starterComponents:
          "@gatsbywpthemes/gatsby-theme-wp-starter/src/components",
        starterUiComponents:
          "@gatsbywpthemes/gatsby-theme-wp-starter/src/components/ui-components",
        starterUtils: "@gatsbywpthemes/gatsby-theme-starter/src/utils",
      },
    },
  ],
}
