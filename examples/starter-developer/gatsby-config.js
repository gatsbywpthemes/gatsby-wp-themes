require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config = require('./config')
const path = require('path')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: 'Gatsby theme WordPress Starter Demo',
    description: 'Gatsby starter site for Gatsby Theme Wordpress Theme.',
    author: '@alexadark',
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl: config.siteUrl,
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-postcss',

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
    'gatsby-plugin-sass',
    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wpcf7',
      options: {
        wordPressUrl: process.env.GATSBY_WP_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        satrertSrc: path.join(__dirname, 'src'),
        starterPages: path.join(__dirname, 'src/pages'),
        starterStyles: path.join(__dirname, 'src/styles'),
        starterComponents: path.join(__dirname, 'src/components'),
        starterUiComponents: path.join(
          __dirname,
          'src/components/ui-components'
        ),
        starterUtils: path.join(__dirname, 'src/utils'),
        config: path.join(__dirname, 'config'),
        contexts: path.join(__dirname, 'src/contexts'),
        starterThemeConfig: path.join(__dirname, 'themeConfig'),
      },
    },
    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wordpress-lightbox',
      options: {},
    },

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
      },
    },
  ],
}
