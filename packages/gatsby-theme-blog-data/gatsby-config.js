const defaultOptions = require(`./utils/defaultOptions`)
const slashes = require('remove-trailing-slash')

module.exports = options => {
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
  } = mergedOptions
  const url = slashes(wordPressUrl)

  const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WP`,
        // This is field under which it's accessible
        fieldName: `wp`,
        // Url to query from
        url: `${url}/graphql`,
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
      resolve: `gatsby-plugin-wordpress-parser`,
      options: {
        wordPressUrl: url,
        uploadsUrl: `${url}/${uploadsPath}`,
        processPostTypes: ['Page', 'Post'],
        graphqlTypeName: 'WP',
        pathPrefix,
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
      title: `Blog Title Placeholder`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
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
