/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  wordPressUrl: ``,
  uploadsPath: `wp-content/uploads`,
  postsPrefix: ``,
  postsPath: ``,
  paginationPrefix: `page`,
  postsPerPage: 10,
  disqus: ``,
  addComments: 1,
  gaTrackingId: 0,
  googleTagManagerId: 0,
  addSiteMap: false,
  siteMapOptions: {},

  widgetAreas: {
    slideMenu: {
      widgets: [`SocialFollow`, `RecentPosts`, `Categories`, `Tags`],
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
}

module.exports = DEFAULT_OPTIONS
