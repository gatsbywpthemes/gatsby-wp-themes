const DEFAULT_OPTIONS = require('@gatsbywpthemes/gatsby-theme-blog-data/utils/defaultOptions')
const fs = require('fs')
require('dotenv').config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    '.env',
})

const path = require('path')
module.exports = (options) => {
  const plugins = [
    `@gatsbywpthemes/gatsby-theme-wp-comments`,
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
  ]

  return {
    siteMetadata: {
      author: `@pehaa`,
    },
    plugins,
  }
}
