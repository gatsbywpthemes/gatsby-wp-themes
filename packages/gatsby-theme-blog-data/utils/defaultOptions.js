/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  wordPressUrl: ``,
  uploadsPath: `wp-content/uploads`,
  pathPrefix: ``,
  postsPath: ``,
  paginationPrefix: `page`,
  menuName: `primary`,
  disqus: ``,
  addWordPressComments: true,
  gaTrackingId: 0,
  googleTagManagerId: 0,
  addSiteMap: false,
  siteMapOptions: {},
  search: 'basic',
  sidebarWidgets: ['Categories', 'RecentPosts', 'Tags', 'SocialFollow'],
  slideMenuWidgets: [],
  archiveSidebar: false,

  addFancyBox: false,
  pageCreateDebugOutput: false,
  parserDebugOutput: false,
  displayDownloadInfo: false,
  logoFileName: false,
}

module.exports = DEFAULT_OPTIONS
