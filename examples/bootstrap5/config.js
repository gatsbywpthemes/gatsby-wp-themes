const config = {
  wordPressUrl: `https://wp-pehaa.xyz/ginger`,
  // uploadsPath: `wp-content/uploads`,
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
  siteUrl: "http://localhost:9001",
  // title: `Blog Title Placeholder`,
  // author: `Name Placeholder`,
  // description: `Description placeholder`,
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
  twitterSummaryCardImage: `Gatsby_Monogram.png`,
  fonts: ["Prata", "Fira Sans:300,700"],
  // gaTrackingId: 0,
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
// https://gatsby-test-2.alexaspalato.website
//https://gatsby-theme-demo.alexaspalato.website
//`https://gatsby-theme-demo.alexaspalato.website`,
// `https://gatsby-theme-demo.alexaspalato.website/wp-content/uploads/`,
// `https://wp-pehaa.com/demo-pehaa1`,
// `https://wp-pehaa.com/demo-pehaa1/wp-content/uploads/`,
module.exports = config
