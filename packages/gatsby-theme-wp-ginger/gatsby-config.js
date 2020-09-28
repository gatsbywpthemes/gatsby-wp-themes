require('dotenv').config()
module.exports = (options) => {
  console.log(options)
  options.fonts = options.fonts || ['abril fatface', 'fira sans']
  options.customFonts = []
  if (options.fonts) {
    options.customFonts = options.fonts.filter(
      (el) =>
        el.toLowerCase().indexOf(`fira sans`) === -1 &&
        el.toLowerCase().indexOf(`abril fatface`) === -1
    )
  }

  const widgets =
    typeof options.slideMenuWidgets === 'undefined'
      ? [`SocialFollow`, `RecentPosts`, `Categories`, `Tags`]
      : options.slideMenuWidgets

  const mergedOptions = {
    addColorModes: true,
    addFancyBox: true,
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
      resolve: `gatsby-theme-blog-data`,
      options: mergedOptions,
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        selector: `[data-sal], .entry-content blockquote, .entry-content h1,.entry-content h2,.entry-content h3,.entry-content h4,.entry-content h5,.entry-content h6, .entry-content .animate-on-scroll`,
      },
    },
    `gatsby-plugin-sass`,

    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
      },
    },
  ]
  /**
   * Conditionally add google fonts plugin
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

  /**
   * Conditionally add google fonts plugin
   * to avoid errors on build
   */
  if (mergedOptions.addFancyBox) {
    plugins.push(`gatsby-plugin-wordpress-fancybox`)
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
