/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  wordPressUrl: process.env.GATSBY_WP_URL,
  pathPrefix: '',
  paginationPrefix: 'page',
  addWordPressComments: true,
  addWordPressSearch: true,
  gaTrackingId: null,
  gaOptions: {},
  googleTagManagerId: null,
  googleTagManagerOptions: {},
  addSiteMap: false,
  siteMapOptions: {},
  widgetAreas: {
    slideMenuWidgets: ['Categories', 'RecentPosts', 'Tags', 'SocialFollow'],
    sidebarWidgets: ['Categories', 'RecentPosts', 'Tags', 'SocialFollow'],
  },
  archiveSidebarPosition: 'right',
  pageCreateDebugOutput: false,
  logo: null,
  darkModeLogo: null,
  socialFollowLinks: [],

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
