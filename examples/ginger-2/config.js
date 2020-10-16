const config = {
  wordPressUrl: `https://wp-pehaa.xyz/ginger-kitchen/`,
  // uploadsPath: `wp-content/uploads`,
  // pathPrefix: "",
  // paginationPrefix: `page`,
  // addWordPressComments: true,
  menuName: "main",
  //slideMenuWidgets: [`SocialFollow`, `RecentPosts`, `Tags`],
  siteUrl: "https://gatsby-wp-ginger-kitchen.netlify.app",
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
  fonts: ["Abril Fatface", "Lora:400,400i,700,700i"],
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  addWordPressSearch: true,
  // addColorModes: false,
  skipTitle: ["home", "contact-us"],
  seoWithYoast: true,
}
// https://gatsby-test-2.alexaspalato.website
//https://gatsby-theme-demo.alexaspalato.website
//`https://gatsby-theme-demo.alexaspalato.website`,
// `https://gatsby-theme-demo.alexaspalato.website/wp-content/uploads/`,
// `https://wp-pehaa.com/demo-pehaa1`,
// `https://wp-pehaa.com/demo-pehaa1/wp-content/uploads/`,
module.exports = config
