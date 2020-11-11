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
      resolve: `gatsby-theme-wp-starter-chakra`,
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
        starterSrc: "gatsby-theme-wp-starter-chakra/src",
        starterPages: "gatsby-theme-wp-starter-chakra/src/pages",
        starterStyles: "gatsby-theme-wp-starter-chakra/src/styles",
        starterComponents: "gatsby-theme-wp-starter-chakra/src/components",
        starterUiComponents:
          "gatsby-theme-wp-starter-chakra/src/components/ui-components",
        starterUtils: "gatsby-theme-wp-starter-chakra/src/utils",
      },
    },
  ],
}
