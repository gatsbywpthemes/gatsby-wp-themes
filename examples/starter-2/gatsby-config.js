require("dotenv").config()
const { title, author, description, social, ...options } = require("./config")

module.exports = {
  siteMetadata: {
    title,
    description,
    author,
    wordPressUrl: options.wordpressUrl,
    siteUrl: options.siteUrl,
    social,
  },
  plugins: [
    {
      resolve: `gatsby-theme-wp-blog-starter`,
      options: {
        ...options,
        pathPrefix:
          process.env.NODE_ENV === "development" ? "" : options.pathPrefix,
      },
    },
    {
      resolve: "@gatsbywpthemes/gatsby-plugin-wpcf7",
      options: {
        wordPressUrl: options.wordPressUrl,
      },
    },
  ],
}
