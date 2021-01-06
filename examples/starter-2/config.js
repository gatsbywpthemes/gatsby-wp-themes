const config = {
  wordPressUrl: "https://starter.gatsby-wp.com/",
  // paginationPrefix: 'page',

  menuName: "main",
  // addWordPressComments: 1,
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  disqus: process.env.GATSBY_DISQUS_NAME,

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
  fonts: ["baumans", "coda", "roboto"],
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  seoWithYoast: true,
}

module.exports = config
