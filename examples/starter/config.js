const config = {
  wordPressUrl: `https://gatsby-theme-demo.alexaspalato.website/`,
  // postsPrefix: `posts`,
  /* use false or slug, for example 'home' */
  // staticHomePagePath: `home`,
  /* make sure to leave it as empty string if staticHomePage is false.
        Otherwise make sur to set a path, for example: 'blog' */
  // postsPath: `blog`,
  // // paginationPrefix: `page`,
  postsPerPage: 5,
  // disqus: `webstantly`,

  // addComments: false,

  widgetAreas: {
    slideMenu: {
      widgets: [`Categories`, `RecentPosts`, `SocialFollow`, `Tags`],
    },
    sidebar: {
      widgets: [`Categories`, `SocialFollow`, `RecentPosts`, `Tags`],
      position: "right",
      location: {
        archive: true,
        single: false,
        pages: ["typography"],
      },
    },
  },
}

module.exports = config
