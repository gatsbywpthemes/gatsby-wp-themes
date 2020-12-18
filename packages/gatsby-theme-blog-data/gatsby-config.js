const defaultOptions = require(`./utils/defaultOptions`)
const slashes = require('remove-trailing-slash')

module.exports = (options) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }
  const {
    wordPressUrl,
    uploadsPath,
    gaTrackingId,
    googleTagManagerId,
    addSiteMap,
    siteMapOptions,
    pathPrefix,
    parserDebugOutput,
    displayDownloadInfo,
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
  if (googleTagManagerId) {
    plugins.push({
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: googleTagManagerId,
      },
    })
  }

  if (gaTrackingId) {
    plugins.push({
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: gaTrackingId,
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
      author: `Name Placeholder`,
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
