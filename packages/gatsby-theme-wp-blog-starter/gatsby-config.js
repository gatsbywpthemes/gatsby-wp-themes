require('dotenv').config()
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

    layoutWidth: {
      page: `l`,
      post: `l`,
      archive: `l`,
    },
    mailchimpEndpoint: false,
    ...options,
  }
  const plugins = [
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
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sass`,
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-wordpress-lightbox`,
      options: {
        ...(options.lightboxOptions || {}),
      },
    },
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //     threshold: 0.1,
    //     once: true,
    //     selector: `[data-sal],  .entry p, .entry  blockquote, .entry  h1,.entry  h2,.entry  h3,.entry  h4,.entry  h5,.entry  h6 ,.entry-info, .animate-on-scroll`,
    //   },
    // },
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
      title: `Gatsby theme WordPress Starter Demo`,
      description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
      author: `@alexadark`,
    },
    plugins,
  }
}
