const config = {
  wordPressUrl: `https://wp-pehaa.xyz/five-boots`,
  //pathPrefix: "",
  // paginationPrefix: `page`,
  // addWordPressComments: true,
  addDisqusComments: false,
  menuName: "main",
  slideMenuWidgets: [
    `SocialFollow`,
    `RecentPosts`,
    `Categories`,
    `Tags`,
    "Newsletter",
  ],
  siteUrl: "https://gatsby-wp-b5.netlify.app/",
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
  fonts: ["Prata", "Fira Sans:300,700"],
  //universalGATrackingId: "UA-186757931-1",
  universalGAOptions: {
    head: true,
  },
  GTagGATrackingId: "G-V63SJWDYCJ",
  GTagOptions: {
    pluginConfig: {
      // Puts tracking script in the head instead of the body
      head: true,
    },
  },
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  addWordPressSearch: true,
  // instantWPSearch: false,
  // addColorModes: false,
  skipTitle: ["home", "contact"],
  seoWithYoast: true,
  lightboxSettings: {},
}

module.exports = config
