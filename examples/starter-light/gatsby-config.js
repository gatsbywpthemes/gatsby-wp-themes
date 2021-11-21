const DEFAULT_OPTIONS = require("@gatsbywpthemes/gatsby-theme-blog-data-light/utils/defaultOptions")
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
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@gatsbywpthemes/gatsby-plugin-gwpt-tailwind`,
    {
      resolve: `gatsby-plugin-image`,
    },

    {
      resolve: `@gatsbywpthemes/gatsby-plugin-gwpt-packages-light`,
      options: {
        ...DEFAULT_OPTIONS,
        ...options,
      },
    },

    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data-light`,
      options: {
        ...options,
        wordPressUrl: process.env.GATSBY_WP_URL,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
