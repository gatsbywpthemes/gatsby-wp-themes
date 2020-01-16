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
  skipTitle: "all",
  layoutWidth: {
    page: "l",
    post: "l",
    archive: "l",
  },
  fullWidth: ["home", "contact"],
  widgetAreas: {
    slideMenu: {
      widgets: [ 'Categories', 'RecentPosts', 'Tags', 'SocialFollow',],
    },
    sidebar: {
      widgets: [ "Categories", "RecentPosts", "Tags",
      "SocialFollow",],
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
  // fonts: ["abril fatface", "fira sans"],
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // useAlgoliaSearch: false,
}

module.exports = config
