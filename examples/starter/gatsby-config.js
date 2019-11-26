/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./config")

module.exports = {
  siteMetadata: {
    title: `Gatsby theme WordPress Starter Demo`,
    description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
    author: `@pehaa`,
    wordPressUrl: config.wordpressUrl,
    siteUrl: "http://vcard.pehaa.com",
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
    "gatsby-theme-style-guide",
    {
      resolve: `gatsby-theme-wp-blog-starter`,
      options: {
        ...config,
      },
    },
    {
      resolve: "gatsby-plugin-wpcf7",
      options: {
        wordPressUrl: config.wordPressUrl,
      },
    },
  ],
}
