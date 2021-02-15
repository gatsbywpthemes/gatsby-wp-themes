const config = {
  siteUrl: 'https://example.com',
  // wordPressUrl: 'http://localhost:10003/',
  wordPressUrl: process.env.GATSBY_WP_URL,
  // pathPrefix: '/demo',

  // paginationPrefix: 'page',
  // addWordPressComments: 1,
  // addSiteMap: false,
  // siteMapOptions: {},

  skipTitle: 'all',
  layoutWidth: {
    page: 'l',
    post: 'l',
    archive: 'l',
  },
  sidebarWidgets: [
    'Categories',
    'RecentPosts',
    'Tags',
    'SocialFollow',
    'Newsletter',
  ],
  archiveSidebar: 'right',

  // addSiteMap: false,
  // siteMapOptions: {},
}

module.exports = config
