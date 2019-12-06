/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const {
  title,
  author,
  description,
  siteUrl,
  social,
  ...options
} = require("./config")

module.exports = {
  pathPrefix: options.pathPrefix,
  siteMetadata: {
    title,
    description,
    author,
    wordPressUrl: options.wordpressUrl,
    siteUrl,
    social,
  },
  plugins: [
    {
      resolve: `gatsby-theme-wp-ginger`,
      options: {
        ...options,
        /* the file should be placed in static folder, set the file name,
        this image wil be used in a summary format - it should be square and minimum 144px x 144px */

        /* available widgets: SocialFollow, RecentPosts, Categories, Tags */
        /*fonts: [
           "Anton",
          "Arya:400,700",
          // you can also specify font weights and styles
        ],*/
      },
    },
    {
      resolve: `gatsby-plugin-wpcf7`,
      options: {
        wordPressUrl: options.wordPressUrl,
      },
    },
  ],
}
