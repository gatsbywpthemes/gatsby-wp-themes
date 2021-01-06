const config = {
  //pathPrefix: "",
  // paginationPrefix: `page`,
  // addWordPressComments: true,
  addDisqusComments: true,
  menuName: "main",
  slideMenuWidgets: [`SocialFollow`, `RecentPosts`, `Tags`, "Newsletter"],
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
  fonts: ["Special+Elite", "Open+Sans:400,400i,700,700i"],
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  addWordPressSearch: true,
  // instantWPSearch: false,
  // addColorModes: false,
  skipTitle: ["home-vcard", "contact"],
  seoWithYoast: true,
  lightboxSettings: {},
}
module.exports = config
