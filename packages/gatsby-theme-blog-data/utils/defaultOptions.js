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
  postsPerPage: 10,
  menuName: `primary`,
  disqus: ``,
  addComments: 1,
  gaTrackingId: 0,
  googleTagManagerId: 0,
  addSiteMap: false,
  siteMapOptions: {},
  search: 'basic',
  widgetAreas: {
    slideMenu: {
      widgets: [],
    },
    sidebar: {
      widgets: [],
      position: 'right',
      location: {
        archive: false,
        single: false,
        pages: false, //options: all for all pages or array of page slugs
      },
    },
  },
  addFancyBox: false,
}

module.exports = DEFAULT_OPTIONS
