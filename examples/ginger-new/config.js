const config = {
  //pathPrefix: "",
  //paginationPrefix: "page",
  // addWordPressComments: true,
  logo: "icon.svg",
  darkModeLogo: "icon1.svg",
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
  fonts: ["Modak"],
  addSiteMap: true,
  //siteMapOptions: {},
  addWordPressSearch: true,
  // instantWPSearch: false,
  // addColorModes: false,
  skipTitle: ["home"],
  lightboxSettings: {},
  favicon: "static/icon.svg",
}
module.exports = config
