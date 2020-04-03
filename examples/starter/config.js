const config = {
  wordPressUrl: "https://starter.alexaspalato.website",
  // uploadsPath: 'wp-content/uploads',
  postsPath: "",
  // paginationPrefix: 'page',
  // disqus: 'webstantly',
  menuName: "main",
  // addWordPressComments: 1,
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
  sidebarWidgets: [
    "Categories",
    "RecentPosts",
    "Tags",
    "SocialFollow",
    "Newsletter",
  ],
  slideMenuWidgets: ["Categories", "RecentPosts", "SocialFollow", "Newsletter"],
  archiveSidebar: "right",

  // siteUrl: "https://example.com",
  // title: 'Blog Title Placeholder',
  // author: 'Name Placeholder',
  // description: 'Description placeholder',
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/gatsbyjs",
    },
    {
      name: "facebook",
      url: "#",
    },
    {
      name: "linkedin",
      url: "#",
    },
    {
      name: "instagram",
      url: "#",
    },
  ],
  // twitterSummaryCardImage: 'Gatsby_Monogram.png',
  // fonts: ["abril fatface", "fira sans"],
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // useAlgoliaSearch: false,
  mailchimpEndpoint:
    "https://gmail.us20.list-manage.com/subscribe/post?u=264367957087f30a2e5e30279&amp;id=338936df19",
}

module.exports = config
