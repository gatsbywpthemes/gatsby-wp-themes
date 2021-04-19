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
    developLimit,
  } = mergedOptions

  const url = slashes(wordPressUrl)

  const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: 'gatsby-plugin-image',
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${url}/graphql`,
        verbose: true,
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        html: {
          imageQuality: 60,
        },
        presets: [
          {
            presetName: `DEVELOP`,
            useIf: () => process.env.NODE_ENV === `development`,
            options: {
              type: {
                __all: {
                  limit: developLimit,
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    '@gatsbywpthemes/gatsby-plugin-wordpress-parser',
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
    },
    plugins,
  }
}
