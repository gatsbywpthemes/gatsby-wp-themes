require('dotenv').config()
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
    '@chakra-ui/gatsby-plugin',
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
      resolve: '@gatsbywpthemes/gatsby-plugin-wp-seo',
      options: {
        siteUrl: options.siteUrl,
        pathPrefix: options.pathPrefix,
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
    plugins.push({
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: options.fonts,
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
