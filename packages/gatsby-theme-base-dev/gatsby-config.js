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
      resolve: '@gatsbywpthemes/gatsby-plugin-wp-seo',
    },

    {
      resolve: `@gatsbywpthemes/gatsby-plugin-wordpress-lightbox`,
      options: {
        ...(options.lightboxOptions || {}),
      },
    },

    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wpcf7',
      options: {
        wordPressUrl: process.env.GATSBY_WP_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        dataComponents: '@gatsbywpthemes/gatsby-theme-blog-data/src/components',
      },
    },
  ]

  /**
   * Conditionally add  plugin
   * to avoid errors on build
   */
  if (options.fonts?.length) {
    const googleFonts = []
    options.fonts.forEach((font) => {
      const [googleFont, variantsString] = font.split(':')

      googleFonts.push({
        family: googleFont,
        variants: variantsString ? variantsString.split(',') : undefined,
      })
    })

    plugins.push({
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: googleFonts,
        },
        formats: ['woff2', 'woff'],
        useMinify: true,
        display: 'swap',
      },
    })
  }

  if (process.env.GATSBY_MAILCHIMP_ENDPOINT) {
    plugins.push({
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
      },
    })
  }
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
