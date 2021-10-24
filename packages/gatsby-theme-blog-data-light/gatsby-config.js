const defaultOptions = require(`./utils/defaultOptions`)
const slashes = require('remove-trailing-slash')
const fs = require('fs')

module.exports = (options) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }
  const { wordPressUrl, developLimit, gatsbySourceWordPressOptions } =
    mergedOptions

  const { presets = [], ...otherGatsbySourceWordPressOptions } =
    gatsbySourceWordPressOptions

  const url = slashes(wordPressUrl)

  const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ]

  return {
    siteMetadata: {
      siteUrl: `http://example.com`,
    },
    plugins,
  }
}
