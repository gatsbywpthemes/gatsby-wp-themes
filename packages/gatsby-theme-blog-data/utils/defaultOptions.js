/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  wordPressUrl: ``,
  uploadsPath: `wp-content/uploads`,
  pathPrefix: ``,
  postsPrefix: ``,
  postsPath: ``,
  paginationPrefix: `page`,
  menuName: `primary`,
  disqus: ``,
  addComments: true,
  dynamicComments: true,
  gaTrackingId: 0,
  googleTagManagerId: 0,
  addSiteMap: false,
  siteMapOptions: {},
  search: 'basic',
  sidebarWidgets: [],
  slideMenuWidgets: [],
  archiveSidebar: false,

  addFancyBox: false,
}

module.exports = DEFAULT_OPTIONS
