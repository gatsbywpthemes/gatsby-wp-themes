require('dotenv').config()
const path = require('path')
module.exports = (options) => {
  options.fonts = options.fonts || ['IBM Plex Mono', 'Roboto Slab']
  options.customFonts = []
  if (options.fonts) {
    options.customFonts = options.fonts.filter(
      (el) =>
        el.toLowerCase().indexOf(`IBM Plex Mono`) === -1 &&
        el.toLowerCase().indexOf(`Roboto Slab`) === -1
    )
  }

  const mergedOptions = {
    addColorModes: true,
    skipTitle: [],
    animation: true,

    layoutWidth: {
      page: `l`,
      post: `l`,
      archive: `l`,
    },
    mailchimpEndpoint: false,
    ...options,
  }
  const plugins = [
    `gatsby-plugin-postcss`,
    {
      resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
      options: mergedOptions,
    },
    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wp-seo',
      options: {
        siteUrl: options.siteUrl,
        pathPrefix: options.pathPrefix,
      },
    },
    '@chakra-ui/gatsby-plugin',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        starterSrc: path.join(__dirname, 'src'),
        starterPages: path.join(__dirname, 'src/pages'),
        starterStyles: path.join(__dirname, 'src/styles'),
        starterComponents: path.join(__dirname, 'src/components'),
        starterUiComponents: path.join(
          __dirname,
          'src/components/ui-components'
        ),
        starterUtils: path.join(__dirname, 'src/utils'),
        starterThemeConfig: path.join(__dirname, 'themeConfig'),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    //   options: {
    //     analyzerMode: 'static',
    //     disable: !process.env.ANALYZE_BUNDLE_SIZE,
    //   },
    // },
  ]

  /**
   * Conditionally add  plugin
   * to avoid errors on build
   */
  if (mergedOptions.customFonts.length) {
    plugins.push({
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: mergedOptions.customFonts,
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
  if (mergedOptions.animation === true) {
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
