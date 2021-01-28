require("dotenv").config()
const path = require("path")
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
    `gatsby-plugin-postcss`,
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,

    {
      resolve: `@gatsbywpthemes/gatsby-theme-starter-dev`,
      options: {
        ...options,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        starterSrc: path.join(__dirname, "src"),
        starterPages: path.join(__dirname, "src/pages"),
        starterStyles: path.join(__dirname, "src/styles"),
        starterComponents: path.join(__dirname, "src/components"),
        starterUiComponents: path.join(
          __dirname,
          "src/components/ui-components"
        ),
        starterUtils: path.join(__dirname, "src/utils"),
        starterThemeConfig: path.join(__dirname, "themeConfig"),
      },
    },
  ],
}
