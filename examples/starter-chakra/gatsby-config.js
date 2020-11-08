const config = require('./config')

module.exports = {
  siteMetadata: {
    title: 'Gatsby theme WordPress Starter Demo',
    description: 'Gatsby starter site for Gatsby Theme Wordpress Theme.',
    author: '@alexadark',
    wordPressUrl: config.wordpressUrl,
    siteUrl: config.siteUrl,
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/gatsbyjs',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/gatsbyjs',
      },
      {
        name: 'CodePen',
        url: 'https://codepen.io/pehaa',
      },
      {
        name: 'Instagram',
        url: '#',
      },
      {
        name: 'Linkedin',
        url: '#',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-blog-data',
      options: {
        ...config,
        pathPrefix:
          process.env.NODE_ENV === 'development' ? '' : config.pathPrefix,
      },
    },
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: 'gatsby-plugin-wp-seo',
      options: {
        siteUrl: config.siteUrl,
        pathPrefix: config.pathPrefix,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    // {
    //   resolve: 'gatsby-plugin-wpcf7',
    //   options: {
    //     wordPressUrl: config.wordPressUrl,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-wordpress-lightbox',
      options: {},
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
    //   },
    // },
  ],
}
