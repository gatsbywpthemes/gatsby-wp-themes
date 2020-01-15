const config = {
  wordPressUrl: "https://starter.alexaspalato.website/",
  // uploadsPath: 'wp-content/uploads',
  // postsPrefix: '',
  postsPath: "",
  // paginationPrefix: 'page',
  postsPerPage: 3,
  // disqus: 'webstantly',
  menuName: "main",
  // addComments: 1,
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // search: "algolia",
  // skipTitle: "all",
  layoutWidth: {
    page: "container",
    post: "l",
    archive: "l",
  },
  // fullWidth: [],
  widgetAreas: {
    slideMenu: {
      // widgets: ['SocialFollow', 'Categories', 'RecentPosts', 'Tags'],
    },
    sidebar: {
      widgets: ["SocialFollow", "Categories", "RecentPosts", "Tags"],
      position: "right",
      location: {
        archive: true,
        // single: false,
        pages: [],
      },
    },
  },

  // siteUrl: "https://example.com",
  // title: 'Blog Title Placeholder',
  // author: 'Name Placeholder',
  // description: 'Description placeholder',
  /* social: [
    {
      name: 'twitter',
      url: 'https://twitter.com/gatsbyjs',
    },
  ], */
  // twitterSummaryCardImage: 'Gatsby_Monogram.png',
  // fonts: ["abril fatface", "fira sans"],
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // useAlgoliaSearch: false,
}

module.exports = config
