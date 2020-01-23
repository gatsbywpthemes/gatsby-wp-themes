const config = {
  wordPressUrl: "https://starter.alexaspalato.website",
  // wordPressUrl: "https://wp-pehaa.com/ginger-mini/",

  // uploadsPath: 'wp-content/uploads',
  // postsPrefix: '',
  postsPath: "/blog",
  // paginationPrefix: 'page',
  postsPerPage: 3,
  // disqus: 'webstantly',
  menuName: "main",
  // addComments: 1,
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // search: "algolia",
  skipTitle: "all",
  layoutWidth: {
    page: "l",
    post: "l",
    archive: "l",
  },
  fullWidth: ["home", "contact"],
  widgetAreas: {
    slideMenu: {
      widgets: [
        "Categories",
        "RecentPosts",
        "Tags",
        "SocialFollow",
        "Newsletter",
      ],
    },
    sidebar: {
      // widgets: ['SocialFollow', 'Categories', 'RecentPosts', 'Tags'],
      position: "right",
      location: {
        archive: false,
        single: false,
        pages: [],
      },
    },
  },

  fonts: ["Baumans", "Khand:400,600"],
  // siteUrl: "https://example.com",
  // title: 'Blog Title Placeholder',
  // author: 'Name Placeholder',
  // description: 'Description placeholder',
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/gatsbyjs",
    },
    {
      name: "facebook",
      url: "#",
    },
    {
      name: "linkedin",
      url: "#",
    },
    {
      name: "instagram",
      url: "#",
    },
  ],
  // twitterSummaryCardImage: 'Gatsby_Monogram.png',
  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  // useAlgoliaSearch: false,
  mailchimpEndpoint:
    "https://gmail.us20.list-manage.com/subscribe/post?u=264367957087f30a2e5e30279&amp;id=338936df19",
}

module.exports = config
