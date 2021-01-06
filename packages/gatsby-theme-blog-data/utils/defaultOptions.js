/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  wordPressUrl: process.env.GATSBY_WP_URL,
  pathPrefix: ``,
  paginationPrefix: `page`,
  menuName: `main`,
  disqus: process.env.GATSBY_DISQUS_NAME,
  addWordPressComments: true,
  gaTrackingId: 0,
  gaOptions: {},
  googleTagManagerId: 0,
  addSiteMap: false,
  siteMapOptions: {},
  search: 'basic',
  sidebarWidgets: ['Categories', 'RecentPosts', 'Tags', 'SocialFollow'],
  slideMenuWidgets: [],
  archiveSidebar: false,
  pageCreateDebugOutput: false,
  parserDebugOutput: false,
  displayDownloadInfo: false,
  logoFileName: false,
  seoWithYoast: false,
}

module.exports = DEFAULT_OPTIONS
