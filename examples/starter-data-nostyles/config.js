const config = {
  wordPressUrl: 'https://starter.gatsby-wp.com/',
  siteUrl: 'https://example.com',
  //pathPrefix: '/demo',

  // paginationPrefix: 'page',

  // disqus: process.env.GATSBY_DISQUS_NAME,
  menuName: 'main',
  // addWordPressComments: 1,
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
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

  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  seoWithYoast: true,
}

module.exports = config
