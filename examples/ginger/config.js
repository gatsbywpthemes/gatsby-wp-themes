const config = {
  wordPressUrl: `https://wp-pehaa.com/demo-pehaa1`,
  // uploadsPath: `wp-content/uploads`,
  // pathPrefix: "",
  // postsPrefix: ``,
  postsPath: `blog`,
  // paginationPrefix: `page`,
  // addComments: true,
  menuName: "main",
  gingerWidgets: [
    `SocialFollow`,
    `RecentPosts`,
    `Categories`,
    `Tags`,
    "Newsletter",
  ],
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
  fonts: ["Abril Fatface", "Fira Sans"],
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  addWordPressSearch: true,
  // instantWPSearch: false,
  // addColorModes: false,
  // addFancyBox: true,
  skipTitle: ["home"],
  mailchimpEndpoint:
    "https://gmail.us20.list-manage.com/subscribe/post?u=264367957087f30a2e5e30279&amp;id=338936df19",
}
// https://gatsby-test-2.alexaspalato.website
//https://gatsby-theme-demo.alexaspalato.website
//`https://gatsby-theme-demo.alexaspalato.website`,
// `https://gatsby-theme-demo.alexaspalato.website/wp-content/uploads/`,
// `https://wp-pehaa.com/demo-pehaa1`,
// `https://wp-pehaa.com/demo-pehaa1/wp-content/uploads/`,
module.exports = config
