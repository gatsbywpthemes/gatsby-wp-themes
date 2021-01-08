const config = {
  wordPressUrl: "https://starter.gatsby-wp.com/",

  // paginationPrefix: 'page',
  // addWordPressComments: 1,

  // menuName: "main",
  // addSiteMap: false,
  // siteMapOptions: {},

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
  // fonts: ["abril fatface", "fira sans"],
  // addSiteMap: false,
  // siteMapOptions: {},
  seoWithYoast: true,
}

module.exports = config
