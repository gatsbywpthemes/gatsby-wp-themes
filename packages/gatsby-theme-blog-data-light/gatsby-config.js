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
  ]

  return {
    siteMetadata: {
      siteUrl: `http://example.com`,
    },
    plugins,
  }
}
