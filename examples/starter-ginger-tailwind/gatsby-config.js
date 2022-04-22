const DEFAULT_OPTIONS = require("@gatsbywpthemes/gatsby-theme-blog-data/utils/defaultOptions");
const fs = require("fs");
require("dotenv").config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    ".env",
});
const { author, pathPrefix, ...options } = require("./config");
const siteUrl = process.env.GATSBY_SITE_URL || options.siteUrl;
options.wordPressUrl = process.env.GATSBY_WP_URL;

module.exports = {
  pathPrefix,
  siteMetadata: {
    author: `@maikap_dipankar`,
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark",
        classNameLight: "light",
        storageKey: "darkMode",
        minify: true,
      },
    },
    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
      options: options,
    },
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-gwpt-packages`,
      options: {
        ...DEFAULT_OPTIONS,
        ...options,
      },
    },
    `@gatsbywpthemes/gatsby-plugin-gwpt-tailwind`,
    // `gatsby-plugin-postcss`,
  ],
};
