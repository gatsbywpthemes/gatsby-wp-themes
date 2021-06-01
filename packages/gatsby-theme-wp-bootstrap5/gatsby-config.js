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
    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
      options,
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
        bootstrap5ThemeSrc: path.join(__dirname, 'src'),
        bootstrap5ThemePages: path.join(__dirname, 'src/pages'),
        bootstrap5ThemeStyles: path.join(__dirname, 'src/styles'),
        bootstrap5ThemeComponents: path.join(__dirname, 'src/components'),
        bootstrap5ThemeUiComponents: path.join(
          __dirname,
          'src/components/ui-components'
        ),
        bootstrap5ThemeUtils: path.join(__dirname, 'src/utils'),
      },
    },
  ]

  return {
    siteMetadata: {},
    plugins,
  }
}
