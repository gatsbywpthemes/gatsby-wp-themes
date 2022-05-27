const DEFAULT_OPTIONS = require("@gatsbywpthemes/gatsby-theme-wp-data/utils/defaultOptions")
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
    `gatsby-plugin-use-dark-mode`,
    `@gatsbywpthemes/gatsby-theme-wp-comments`,
    `@gatsbywpthemes/gatsby-theme-wp-search`,
    `@gatsbywpthemes/gatsby-plugin-gwpt-tailwind`,
    `@gatsbywpthemes/gatsby-plugin-wpcf7`,
    `@gatsbywpthemes/gatsby-plugin-wp-seo`,
    `@gatsbywpthemes/gatsby-theme-ui-components`,
    `@gatsbywpthemes/gatsby-theme-acf-builder`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-gwpt-utils`,
      options: {
        ...DEFAULT_OPTIONS,
        ...options,
      },
    },

    {
      resolve: `@gatsbywpthemes/gatsby-theme-wp-data`,
      options: {
        ...options,
        wordPressUrl: process.env.GATSBY_WP_URL,
      },
    },
  ],
}
