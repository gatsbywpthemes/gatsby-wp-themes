const config = {
  wordPressUrl: 'https://starter.alexaspalato.website',
  // wordPressUrl: "http://gatsbystarter.wst/",

  // uploadsPath: 'wp-content/uploads',
  // postsPath: '/blog',
  // paginationPrefix: 'page',
  postsPerPage: 3,
  // disqus: 'webstantly',
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
  // archiveSidebar: "left",

  fonts: ['Baumans', 'Khand:400,600'],
  // siteUrl: "https://example.com",
  // title: 'Blog Title Placeholder',
  // author: 'Name Placeholder',
  // description: 'Description placeholder',
  social: [
    {
      name: 'twitter',
      url: 'https://twitter.com/gatsbyjs',
    },
    {
      name: 'facebook',
      url: '#',
    },
    {
      name: 'linkedin',
      url: '#',
    },
    {
      name: 'instagram',
      url: '#',
    },
  ],
  // twitterSummaryCardImage: 'Gatsby_Monogram.png',
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},

  mailchimpEndpoint:
    'https://gmail.us20.list-manage.com/subscribe/post?u=264367957087f30a2e5e30279&amp;id=338936df19',
}

module.exports = config
