const DEFAULT_OPTIONS = require("@gatsbywpthemes/gatsby-theme-blog-data/utils/defaultOptions")
const fs = require("fs")
require("dotenv").config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    ".env",
})

const {
  title,
  author,
  description,
  pathPrefix,
  ...options
} = require("./config")
const siteUrl = process.env.GATSBY_SITE_URL || options.siteUrl
options.wordPressUrl = process.env.GATSBY_WP_URL

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
      resolve: `@gatsbywpthemes/gatsby-plugin-gwpt-packages`,
      options: {
        ...DEFAULT_OPTIONS,
        ...options,
      },
    },

    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
      options: {
        ...options,
        wordPressUrl: process.env.GATSBY_WP_URL,
      },
    },
  ],
}