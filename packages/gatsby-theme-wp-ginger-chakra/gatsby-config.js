const fs = require('fs')
require('dotenv').config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    '.env',
})
const path = require('path')
module.exports = (options) => {
  options.fonts = options.googleFonts || []

  const mergedOptions = {
    ...options,
  }
  const plugins = [
    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
      options: mergedOptions,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        selector: `[data-sal], .entry-content .animate-on-scroll`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-wpcf7`,
      options: {
        wordPressUrl: options.wordPressUrl,
      },
    },
    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wp-seo',
    },

    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
      },
    },
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-wordpress-lightbox`,
      options: {
        ...(options.lightboxOptions || {}),
      },
    },
  ]
  /**
   * Conditionally add google fonts plugin
   * to avoid errors on build
   */
  if (options.fonts.length) {
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

  /**
   * Conditionally add mailchimp subscription plugin
   */

  if (process.env.GATSBY_MAILCHIMP_ENDPOINT) {
    plugins.push({
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
      },
    })
  }

  return {
    siteMetadata: {
      author: `@pehaa`,
    },
    plugins,
  }
}
