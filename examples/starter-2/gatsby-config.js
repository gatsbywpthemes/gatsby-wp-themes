require("dotenv").config()
const {
  title,
  author,
  description,
  siteUrl,
  social,
  ...options
} = require("./config")

module.exports = {
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
      resolve: `gatsby-theme-wp-blog-starter`,
      options: {
        ...options,
      },
    },
    {
      resolve: "gatsby-plugin-wpcf7",
      options: {
        wordPressUrl: options.wordPressUrl,
      },
    },
  ],
}
