const fs = require("fs")
require("dotenv").config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    ".env",
})
const path = require("path")
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-emotion`,

    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
      options: {
        ...options,
        wordPressUrl: process.env.GATSBY_WP_URL,
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
