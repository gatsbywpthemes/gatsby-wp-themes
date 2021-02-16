require('dotenv').config()
const path = require('path')
module.exports = (options) => {
  options.fonts = options.fonts || ['Abril Fatface', 'Fira Sans:300,700']

  const widgets =
    typeof options.slideMenuWidgets === 'undefined'
      ? [`SocialFollow`, `RecentPosts`, `Categories`, `Tags`]
      : options.slideMenuWidgets

  const mergedOptions = {
    addColorModes: true,
    skipTitle: [],
    widgetAreas: {
      slideMenu: {
        widgets,
      },
    },
    ...options,
  }
  const plugins = [
    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
      options: mergedOptions,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        selector: `[data-sal]`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wp-seo',
      options: {
        siteUrl: options.siteUrl,
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
    siteMetadata: {},
    plugins,
  }
}
