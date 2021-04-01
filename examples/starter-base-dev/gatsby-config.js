require("dotenv").config()
const path = require("path")
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
    `gatsby-plugin-postcss`,
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,

    {
      resolve: `@gatsbywpthemes/gatsby-theme-base-dev`,
      options: {
        ...options,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        baseSrc: path.join(__dirname, "src"),
        basePages: path.join(__dirname, "src/pages"),
        baseStyles: path.join(__dirname, "src/styles"),
        baseComponents: path.join(__dirname, "src/components"),
        baseUiComponents: path.join(__dirname, "src/components/ui-components"),
        baseUtils: path.join(__dirname, "src/utils"),
        baseThemeConfig: path.join(__dirname, "themeConfig"),
      },
    },
  ],
}
