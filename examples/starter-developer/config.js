const config = {
  siteUrl: 'https://example.com',
  // wordPressUrl: 'http://localhost:10003/',
  wordPressUrl: process.env.GATSBY_WP_URL,
  // pathPrefix: '/demo',

  // paginationPrefix: 'page',

  menuName: 'main',
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
  slideMenuWidgets: ['Categories', 'RecentPosts', 'SocialFollow', 'Newsletter'],
  archiveSidebar: 'right',

  // addSiteMap: false,
  // siteMapOptions: {},
}

module.exports = config
