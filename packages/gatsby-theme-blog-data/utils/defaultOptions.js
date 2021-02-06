/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  wordPressUrl: process.env.GATSBY_WP_URL,
  pathPrefix: ``,
  paginationPrefix: `page`,
  menuName: `main`,
  disqus: false, //process.env.GATSBY_DISQUS_NAME,
  addWordPressComments: true,
  gaUniversalTrackingId: null,
  gaUniversalOptions: {},
  ga4TrackingId: null,
  ga4Options: {},
  googleTagManagerId: null,
  googleTagManagerOptions: {},
  manifestOptions: {},
  addSiteMap: false,
  siteMapOptions: {},
  sidebarWidgets: ['Categories', 'RecentPosts', 'Tags', 'SocialFollow'],
  slideMenuWidgets: [],
  archiveSidebar: false,
  pageCreateDebugOutput: false,
  logo: null,
  darkModeLogo: null,
}

module.exports = DEFAULT_OPTIONS
