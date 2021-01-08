const defaultOptions = require(`./utils/defaultOptions`)
const slashes = require('remove-trailing-slash')
const fs = require('fs')

module.exports = (options) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }
  const {
    wordPressUrl,
    gaUniversalTrackingId,
    gaUniversalOptions,
    ga4TrackingId,
    ga4Options,
    googleTagManagerId,
    googleTagManagerOptions,
    addSiteMap,
    siteMapOptions,
    parserDebugOutput,
    favicon,
    manifestOptions,
  } = mergedOptions

  const url = slashes(wordPressUrl)

  const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,

    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `${url}/graphql`,
        verbose: true,
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        html: {
          imageQuality: 60,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon:
          favicon && fs.existsSync(favicon)
            ? favicon
            : `${__dirname}/src/images/gatsby-icon.png`,
        ...manifestOptions,
      },
    },
    {
      resolve: `@gatsbywpthemes/gatsby-plugin-wordpress-parser`,
      options: {
        processPostTypes: ['WpPage', 'WpPost'],
        debugOutput: parserDebugOutput,
      },
    },
  ]

  /**
   * Conditionally add plugins based on theme config
   * to avoid errors while Gatsby boots.
   */
  if (googleTagManagerId || googleTagManagerOptions.id) {
    plugins.push({
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: googleTagManagerId,
        ...googleTagManagerOptions,
      },
    })
  }

  if (gaUniversalTrackingId || gaUniversalOptions.gaTrackingId) {
    plugins.push({
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: gaUniversalTrackingId,
        ...gaUniversalOptions,
      },
    })
  }

  if (ga4TrackingId || ga4Options.trackingIds) {
    plugins.push({
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [ga4TrackingId],
        ...ga4Options,
      },
    })
  }

  if (addSiteMap) {
    plugins.push({
      resolve: 'gatsby-plugin-sitemap',
      options: siteMapOptions,
    })
  }

  return {
    siteMetadata: {
      siteUrl: `http://example.com`,
      social: [
        {
          name: `twitter`,
          url: `https://twitter.com/gatsbyjs`,
        },
      ],
    },
    plugins,
  }
}
