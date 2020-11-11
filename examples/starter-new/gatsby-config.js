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
      resolve: `gatsby-theme-wp-starter`,
      options: {
        ...options,
        pathPrefix:
          process.env.NODE_ENV === "development" ? "" : options.pathPrefix,
      },
    },
    {
      resolve: "gatsby-plugin-wpcf7",
      options: {
        wordPressUrl: options.wordPressUrl,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        starterSrc: "gatsby-theme-wp-starter/src",
        starterPages: "gatsby-theme-wp-starter/src/pages",
        starterStyles: "gatsby-theme-wp-starter/src/styles",
        starterComponents: "gatsby-theme-wp-starter/src/components",
        starterUiComponents:
          "gatsby-theme-wp-starter/src/components/ui-components",
        starterUtils: "gatsby-theme-wp-starter/src/utils",
      },
    },
  ],
}
