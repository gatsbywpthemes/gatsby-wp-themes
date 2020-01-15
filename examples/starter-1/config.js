const config = {
  // wordPressUrl: `http://alexandraspalato.com/gatsby`,
  // wordPressUrl: `http://gatsbydemo.wst/`,
  // wordPressUrl: `https://gatsby-theme-demo.alexaspalato.website/`,
  // wordPressUrl: `https://gatsby-test-2.alexaspalato.website/`,
  wordPressUrl: `https://starter.alexaspalato.website/`,
  // wordPressUrl: `https://wp-pehaa.com/ginger-kitchen`,
  // uploadsPath: `wp-content/uploads`,
  // postsPrefix: ``,
  postsPath: ``,
  // paginationPrefix: `page`,
  postsPerPage: 3,
  // disqus: `webstantly`,
  menuName: "main",
  // addComments: 1,
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // search: "algolia",
  skipTitle: "All",
  layoutWidth: {
    page: `container`,
    post: `l`,
    archive: `l`,
  },
  fullWidth: ["home", "home-vcard", "contact", "gut"],
  widgetAreas: {
    slideMenu: {
      widgets: [`SocialFollow`, `Categories`, `RecentPosts`, `Tags`],
    },
    sidebar: {
      // widgets: [`SocialFollow`, `Categories`, `RecentPosts`, `Tags`],
      position: "right",
      location: {
        archive: false,
        single: false,
        pages: [],
      },
    },
  },

  fonts: ["Playfair+Display:400,700", "Raleway:400,400i,700,700i"],
  // siteUrl: "https://example.com",
  // title: `Blog Title Placeholder`,
  // author: `Name Placeholder`,
  // description: `Description placeholder`,
  /* social: [
    {
      name: `twitter`,
      url: `https://twitter.com/gatsbyjs`,
    },
  ], */
  // twitterSummaryCardImage: `Gatsby_Monogram.png`,
  // fonts: ["abril fatface", "fira sans"],
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // useAlgoliaSearch: false,
}

module.exports = config
