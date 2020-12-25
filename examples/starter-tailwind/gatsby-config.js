require("dotenv").config()
const { title, author, description, social, ...options } = require("./config")

module.exports = {
  siteMetadata: {
    title,
    description,
    author,
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl: options.siteUrl,
    social,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `@gatsbywpthemes/gatsby-theme-tailwind`,
      options: {
        ...options,
        pathPrefix:
          process.env.NODE_ENV === "development" ? "" : options.pathPrefix,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        starterSrc: "@gatsbywpthemes/gatsby-theme-tailwind/src",
        starterPages: "@gatsbywpthemes/gatsby-theme-tailwind/src/pages",
        starterStyles: "@gatsbywpthemes/gatsby-theme-tailwind/src/styles",
        starterComponents:
          "@gatsbywpthemes/gatsby-theme-tailwind/src/components",
        starterUiComponents:
          "@gatsbywpthemes/gatsby-theme-tailwind/src/components/ui-components",
        starterUtils: "@gatsbywpthemes/gatsby-theme-tailwind/src/utils",
        starterThemeConfig: "@gatsbywpthemes/gatsby-theme-tailwind/themeConfig",
      },
    },
  ],
}
