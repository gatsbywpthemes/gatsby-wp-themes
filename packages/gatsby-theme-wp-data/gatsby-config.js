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
    gaTrackingId,
    gaOptions,
    googleTagManagerId,
    googleTagManagerOptions,
    addSiteMap,
    siteMapOptions,
    developLimit,
    gatsbySourceWordPressOptions,
  } = mergedOptions

  const { presets = [], ...otherGatsbySourceWordPressOptions } =
    gatsbySourceWordPressOptions

  const url = slashes(wordPressUrl)

  const plugins = [
    `gatsby-plugin-anchor-links`,

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${url}/graphql`,
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        presets: [
          {
            presetName: `DEVELOP`,
            useIf: () => process.env.NODE_ENV === `development` && developLimit,
            options: {
              type: {
                __all: {
                  limit: developLimit,
                },
              },
            },
          },
          ...presets,
        ],
        ...otherGatsbySourceWordPressOptions,
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

  if (gaTrackingId || gaOptions.trackingIds) {
    plugins.push({
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [gaTrackingId],
        ...gaOptions,
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
