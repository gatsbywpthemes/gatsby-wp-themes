const config = {
  // wordPressUrl: `http://alexandraspalato.com/gatsby`,
  // wordPressUrl: `http://gatsbydemo.wst/`,
  // wordPressUrl: `https://gatsby-theme-demo.alexaspalato.website/`,
  wordPressUrl: `https://gatsby-test-2.alexaspalato.website/`,
  // uploadsPath: `wp-content/uploads`,
  // postsPrefix: ``,
  // postsPath: ``,
  // paginationPrefix: `page`,
  postsPerPage: 5,
  // disqus: `webstantly`,
  menuName: "main menu",
  // addComments: 1,
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // search: "algolia",
  widgetAreas: {
    slideMenu: {
      widgets: [`SocialFollow`, `Categories`, `RecentPosts`, `Tags`],
    },
    sidebar: {
      widgets: [`SocialFollow`, `Categories`, `RecentPosts`, `Tags`],
      position: "right",
      location: {
        archive: false,
        single: false,
        pages: ["typography"],
      },
    },
  },

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
