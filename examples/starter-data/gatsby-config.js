const autoprefixer = require('autoprefixer')
const config = require('./config')

module.exports = {
  siteMetadata: {
    title: `Gatsby theme WordPress Starter Demo`,
    description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
    author: `@pehaa`,
    wordPressUrl: config.wordpressUrl,
    siteUrl: 'http://vcard.pehaa.com',
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
      {
        name: `CodePen`,
        url: `https://codepen.io/pehaa`,
      },
      {
        name: `Instagram`,
        url: `#`,
      },
      {
        name: `Linkedin`,
        url: `#`,
      },
    ],
  },
  plugins: [
    `gatsby-theme-algolia`,
    {
      resolve: `gatsby-theme-blog-data`,
      options: {
        ...config,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-theme-ui`,
    // 'gatsby-theme-style-guide',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
          }),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-wpcf7',
      options: {
        wordPressUrl: config.wordPressUrl,
      },
    },
  ],
}
