const config = {
  siteUrl: "https://example.com/",
  //pathPrefix: "",
  // paginationPrefix: 'page',
  // addWordPressComments: 1,

  // menuName: "main",

  // addSiteMap: false,
  // siteMapOptions: {},
  // animation: false,
  // skipTitle: "all",
  layoutWidth: {
    page: "lg",
    post: "lg",
    archive: "lg",
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
