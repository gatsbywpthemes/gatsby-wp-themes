const config = {
  wordPressUrl: 'https://wp-pehaa.xyz/ginger',
  siteUrl: 'https://example.com',
  //pathPrefix: '/demo',

  // uploadsPath: 'wp-content/uploads',
  postsPath: '/blog',
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

  // twitterSummaryCardImage: 'Gatsby_Monogram.png',
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
}

module.exports = config
