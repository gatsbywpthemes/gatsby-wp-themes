const DEFAULT_OPTIONS = require('@gatsbywpthemes/gatsby-theme-blog-data/utils/defaultOptions')
const fs = require('fs')
require('dotenv').config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    '.env',
})

module.exports = (options) => {
  const mergedOptions = {
    ...DEFAULT_OPTIONS,
    animation: true,
    layoutWidth: {
      page: `l`,
      post: `l`,
      archive: `l`,
    },
    ...options,
  }
  const plugins = [
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
        dataComponents: '@gatsbywpthemes/gatsby-theme-blog-data/src/components',
      },
    },
  ]

  if (mergedOptions.animation) {
    plugins.push({
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        rootMargin: '0% 50%',
        animateClassName: 'sal-animate',
        selector: `[data-sal]`,
      },
    })
  }
  return {
    siteMetadata: {
      title: `Gatsby theme WordPress Starter Demo`,
      description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
      author: `@alexadark`,
    },
    plugins,
  }
}
