const defaultOptions = require(`./utils/defaultOptions`)
const createPosts = require(`./utils/createPosts`)
const createSitePages = require(`./utils/createSitePages`)
const createCategories = require(`./utils/createCategories`)
const createTags = require(`./utils/createTags`)
const createUsers = require(`./utils/createUsers`)

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  /**
   * Merged default theme settings and user settings.
   */
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }

  reporter.warn('make sure to load data from somewhere!')
  await createPosts({ actions, graphql }, mergedOptions)
  await createSitePages({ actions, graphql }, mergedOptions)
  await createCategories({ actions, graphql }, mergedOptions)
  await createTags({ actions, graphql }, mergedOptions)
  await createUsers({ actions, graphql }, mergedOptions)
}

const { createRemoteFileNode } = require('gatsby-source-filesystem')

/**
 * Download WordPress images, add them to GraphQL schema.
 * @link https://www.gatsbyjs.org/docs/node-apis/#createResolvers
 * @link https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=#createremotefilenode
 */
exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WP_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
