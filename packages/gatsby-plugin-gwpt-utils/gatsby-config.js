const fs = require("fs")
require("dotenv").config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    ".env",
})
const path = require("path")
module.exports = (options) => {
  options.fonts = options.fonts || []

  const mergedOptions = {
    ...options,
  }
  const plugins = [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-wpcf7`,
      options: {
        wordPressUrl: options.wordPressUrl,
      },
    },
    {
      resolve: "@gatsbywpthemes/gatsby-plugin-wp-seo",
    },
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-wordpress-lightbox`,
      options: {
        ...(options.lightboxOptions || {}),
      },
    },
  ]
  /**
   * Conditionally add google fonts plugin
   * to avoid errors on build
   */
  if (
    options.webfontsOptions.fonts &&
    (options.webfontsOptions.fonts.google ||
      options.webfontsOptions.fonts.google2)
  ) {
    plugins.push({
      resolve: `gatsby-plugin-webfonts`,
      options: {
        formats: ["woff2", "woff"],
        useMinify: true,
        display: "swap",
        ...options.webfontsOptions,
      },
    })
  }

  /**
   * Conditionally add mailchimp subscription plugin
   */

  if (process.env.GATSBY_MAILCHIMP_ENDPOINT) {
    plugins.push({
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
      },
    })
  }

  return {
    plugins,
  }
}
