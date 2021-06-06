const DEFAULT_OPTIONS = require('@gatsbywpthemes/gatsby-theme-blog-data/utils/defaultOptions')
const fs = require('fs')
require('dotenv').config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    '.env',
})

const path = require('path')
const { author, pathPrefix, ...options } = require('./config')
const siteUrl = process.env.GATSBY_SITE_URL || options.siteUrl
module.exports = {
  pathPrefix,
  siteMetadata: {
    author: `@pehaa`,
    wordPressUrl: process.env.GATSBY_WP_URL,
    siteUrl,
  },
  plugins: [
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
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        gingerThemeSrc: path.join(__dirname, 'src'),
        gingerThemePages: path.join(__dirname, 'src/pages'),
        gingerThemeStyles: path.join(__dirname, 'src/styles'),
        gingerThemeComponents: path.join(__dirname, 'src/components'),
        gingerThemeUiComponents: path.join(
          __dirname,
          'src/components/ui-components'
        ),
        gingerThemeUtils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        selector: `[data-sal], .entry-content .animate-on-scroll`,
      },
    },
  ],
}
