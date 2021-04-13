require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config = require('./config')
const siteUrl = process.env.GATSBY_SITE_URL || options.siteUrl

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: 'Gatsby theme WordPress Starter Demo',
    description: 'Gatsby starter site for Gatsby Theme Wordpress Theme.',
    author: '@alexadark',
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl,
  },
  plugins: [
    {
      resolve: '@gatsbywpthemes/gatsby-theme-blog-data',
      options: {
        ...config,
      },
    },
    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wp-seo',
      options: {
        siteUrl: config.siteUrl,
        pathPrefix: config.pathPrefix,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wpcf7',
      options: {
        wordPressUrl: process.env.GATSBY_WP_URL,
      },
    },
    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wordpress-lightbox',
      options: {},
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint:process.env.GATSBY_MAILCHIMP_ENDPOINT
    //   },
    // },
  ],
}
