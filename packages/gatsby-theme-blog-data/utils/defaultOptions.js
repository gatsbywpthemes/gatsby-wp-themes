/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  wordPressUrl: process.env.GATSBY_WP_URL,
  pathPrefix: '',
  paginationPrefix: 'page',
  addWordPressComments: true,
  addWordPressSearch: false,
  gaUniversalTrackingId: null,
  gaUniversalOptions: {},
  ga4TrackingId: null,
  ga4Options: {},
  googleTagManagerId: null,
  googleTagManagerOptions: {},
  addSiteMap: false,
  siteMapOptions: {},
  widgetAreas: {
    slideMenuWidgets: ['Categories', 'RecentPosts', 'Tags', 'SocialFollow'],
    sidebarWidgets: ['Categories', 'RecentPosts', 'Tags', 'SocialFollow'],
  },
  archiveSidebarPosition: 'right',
  pageCreateDebugOutput: false,
  logo: null,
  darkModeLogo: null,
  socialFollowLinks: [],
  overrideWPColors: false,
  developLimit: null,
  addColorModes: true,
  webfontsOptions: {},
}

module.exports = DEFAULT_OPTIONS
