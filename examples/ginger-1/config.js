const config = {
  wordPressUrl: `https://wp-pehaa.com/ginger-mini`,
  // uploadsPath: `wp-content/uploads`,
  // pathPrefix: "",
  postsPath: `blog`,
  // paginationPrefix: `page`,
  // addWordPressComments: true,
  menuName: "main",
  gingerWidgets: [`SocialFollow`, `RecentPosts`, `Tags`],
  // siteUrl: "https://example.com",
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
  // twitterSummaryCardImage: `Gatsby_Monogram.png`,
  fonts: ["Special+Elite", "Open+Sans:400,400i,700,700i"],
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // addAlgoliaSearch: false,
  // addColorModes: false,
  // addFancyBox: true,
  skipTitle: ["home-vcard", "contact"],
}
// https://gatsby-test-2.alexaspalato.website
//https://gatsby-theme-demo.alexaspalato.website
//`https://gatsby-theme-demo.alexaspalato.website`,
// `https://gatsby-theme-demo.alexaspalato.website/wp-content/uploads/`,
// `https://wp-pehaa.com/demo-pehaa1`,
// `https://wp-pehaa.com/demo-pehaa1/wp-content/uploads/`,
module.exports = config
