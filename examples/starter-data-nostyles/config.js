const config = {
  // wordPressUrl: 'https://starter.gatsby-wp.com/',
  wordPressUrl: process.env.GATSBY_WP_URL,
  //pathPrefix: '/demo',
  // addSiteMap: false,
  // siteMapOptions: {},

  skipTitle: 'all',
  layoutWidth: {
    page: 'l',
    post: 'l',
    archive: 'l',
  },
  archiveSidebar: 'right',

  // addSiteMap: false,
  // siteMapOptions: {},
}

module.exports = config
