const config = {
  wordPressUrl: 'https://starter.alexaspalato.website',

  // postsPrefix: "posts",
  /* use false or slug, for example 'home' */
  /* make sure to leave it as empty string if staticHomePage is false.
        Otherwise make sur to set a path, for example: 'blog' */
  // postsPath: "blog",
  // // paginationPrefix: "page",
  postsPerPage: 3,
  menuName: 'main',
  // disqus: "webstantly",

  // addComments: false,

  widgetAreas: {
    slideMenu: {
      widgets: [
        'Categories',
        'RecentPosts',
        'SocialFollow',
        'Tags',
        'Newsletter',
      ],
    },
    sidebar: {
      widgets: [
        'Categories',
        'SocialFollow',
        'RecentPosts',
        'Tags',
        'Newsletter',
      ],
      position: 'right',
      location: {
        archive: true,
        single: false,
        pages: ['typography'],
      },
    },
  },
  skipTitle: 'all',
  layoutWidth: {
    page: 'l',
    post: 'l',
    archive: 'l',
  },
  fullWidth: ['home', 'contact'],
}

module.exports = config
