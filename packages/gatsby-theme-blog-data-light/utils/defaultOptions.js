/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  wordPressUrl: process.env.GATSBY_WP_URL,
  pathPrefix: '',
  paginationPrefix: 'page',
  socialFollowLinks: [],
  overrideWPColors: false,
  developLimit: null,
  addColorModes: true,
  webfontsOptions: {},
  gatsbySourceWordPressOptions: { presets: [] },
  createPages: true,
  createPosts: true,
  createCategories: true,
  createTags: true,
  createUsers: true,
  withApollo: true,
}

module.exports = DEFAULT_OPTIONS
