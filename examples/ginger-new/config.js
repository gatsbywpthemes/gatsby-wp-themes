const config = {
  //pathPrefix: "",
  //paginationPrefix: "page",
  // addWordPressComments: true,
  addDisqusComments: true,
  menuName: "main",
  slideMenuWidgets: [
    "SocialFollow",
    "RecentPosts",
    "Categories",
    "Tags",
    "Newsletter",
  ],
  siteUrl: "http://localhost:9001",
  // title: "Blog Title Placeholder",
  // author: "Name Placeholder",
  // description: "Description placeholder",
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/gatsbyjs",
    },
    {
      name: "GitHub",
      url: "https://github.com/gatsbyjs",
    },
    {
      name: "Discord",
      url: "https://gatsby.dev/discord",
    },
  ],
  fonts: ["Abril Fatface", "Fira Sans:300,700"],
  addSiteMap: true,
  //siteMapOptions: {},
  addWordPressSearch: true,
  // instantWPSearch: false,
  // addColorModes: false,
  skipTitle: ["home"],
  seoWithYoast: true,
  lightboxSettings: {},
  favicon: "static/favicon.svg",
}
module.exports = config
