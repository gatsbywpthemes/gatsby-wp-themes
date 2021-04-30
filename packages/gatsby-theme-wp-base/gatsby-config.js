const fs = require('fs')
require('dotenv').config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    '.env',
})
const path = require('path')
module.exports = (options) => {
  const mergedOptions = {
    layoutWidth: {
      page: `l`,
      post: `l`,
      archive: `l`,
    },
    ...options,
  }
  const plugins = [
    `gatsby-plugin-postcss`,
    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
      options: mergedOptions,
    },
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-gwpt-packages`,
      options: mergedOptions,
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        baseSrc: path.join(__dirname, 'src'),
        basePages: path.join(__dirname, 'src/pages'),
        baseStyles: path.join(__dirname, 'src/styles'),
        baseComponents: path.join(__dirname, 'src/components'),
        baseUiComponents: path.join(__dirname, 'src/components/ui-components'),
        baseUtils: path.join(__dirname, 'src/utils'),
        baseThemeConfig: path.join(__dirname, 'themeConfig'),
      },
    },
  ]
  return {
    siteMetadata: {
      title: `Gatsby theme WordPress Starter Demo`,
      description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
      author: `@alexadark`,
    },
    plugins,
  }
}
