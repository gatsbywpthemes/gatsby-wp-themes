const config = {
  //pathPrefix: "",
  // paginationPrefix: `page`,
  // addWordPressComments: true,
  menuName: "main",
  slideMenuWidgets: [
    `SocialFollow`,
    `RecentPosts`,
    `Categories`,
    `Tags`,
    "Newsletter",
  ],
  siteUrl: "http://localhost:9001",
  social: [
    {
      name: `twitter`,
      url: `https://twitter.com/gatsbyjs`,
    },
    {
      name: `GitHub`,
      url: `https://github.com/gatsbyjs`,
    },
    {
      name: `Discord`,
      url: `https://gatsby.dev/discord`,
    },
  ],
  fonts: ["Abril Fatface", "Lora:400,400i,700,700i"],
  // addSiteMap: false,
  // siteMapOptions: {},
  addWordPressSearch: true,
  // instantWPSearch: false,
  // addColorModes: false,
  skipTitle: ["home"],
  seoWithYoast: true,
  lightboxSettings: {},
}
module.exports = config
