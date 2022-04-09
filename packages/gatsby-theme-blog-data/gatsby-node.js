const defaultOptions = require(`./utils/defaultOptions`)
const createPosts = require(`./utils/createPosts`)
const createSitePages = require(`./utils/createSitePages`)
const createCategories = require(`./utils/createCategories`)
const createTags = require(`./utils/createTags`)
const createUsers = require(`./utils/createUsers`)
const generalSeoFromWP = require(`./utils/seo/generalSeoFromWP`)
const themeSettingsFromQuery = require(`./utils/themeSettingsFromQuery`)

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  /**
   * Merged default theme settings and user settings.
   */

  const queryTypes = await graphql(`
    query {
      __type(name: "Wp") {
        fields {
          name
          type {
            name
          }
        }
      }
    }
  `)

  const seoFromWP = !!queryTypes.data.__type.fields.find(
    (el) => el.name === 'seo' && el.type.name === 'WpSEOConfig'
  )

  const conditionalSeoQuery = seoFromWP ? generalSeoFromWP : ``

  const { data } = await graphql(`
    query {
      wp {
        allSettings {
          readingSettingsPostsPerPage
        }
        ${conditionalSeoQuery}
        ${themeSettingsFromQuery}
      }
      frontPage: allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          uri
        }
      }
      postsPage: allWpPage(filter: {isPostsPage: {eq: true}}) {
        nodes {
          uri
        }
      }
    }
  `)

  const postsPath = data.postsPage.nodes.length
    ? data.postsPage.nodes[0].uri
    : data.frontPage.nodes.length
    ? false
    : '/'

  const mergedOptions = {
    ...defaultOptions,
    postsPerPage: data.wp?.allSettings?.readingSettingsPostsPerPage,
    seoFromWP,
    generalSeoSettings: data.wp?.seo,
    postsPath,
    ...(data.wp?.headlesswp &&
      data.wp?.headlesswp?.paginationPrefix && {
        paginationPrefix: data.wp?.headlesswp?.paginationPrefix,
      }),
    ...options,
  }
  await Promise.all([
    mergedOptions.createPosts &&
      createPosts({ actions, graphql }, mergedOptions),
    mergedOptions.createPages &&
      createSitePages({ actions, graphql }, mergedOptions),
    mergedOptions.createCategories &&
      createCategories({ actions, graphql }, mergedOptions),
    mergedOptions.createTags && createTags({ actions, graphql }, mergedOptions),
    mergedOptions.createUsers &&
      createUsers({ actions, graphql }, mergedOptions),
  ])
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Wp {
      headlesswp: WpHeadlessWPConfig
    }
    type WpPost {
      headlesswp: WpHeadlessWPPageConfig
    }

    type WpPage {
      headlesswp: WpHeadlessWPPageConfig
    }

    type WpHeadlessWPPageConfig {
      pageTemplate: String
      skipTitle: Boolean
    }

    type WpHeadlessWPConfig {
      paginationPrefix: String
      logo: WpMediaItem
      darkModeLogo: WpMediaItem
      favicon: WpMediaItem
      widgetAreas: [WpHeadlessWPWidgetAreas]
      archiveSidebarPosition: String
      addWordPressComments: Boolean
      addWordPressSearch: Boolean
      addColorModes: Boolean
      socialFollowLinks: [WpHeadlessWPSocial]
      cssTheme: WpHeadlessWPCSSTheme
    }

    type WpHeadlessWPWidgetAreas {
      name: String
      widgets: [String]
    }

    type WpHeadlessWPSocial {
      name: String
      url: String
    }

    type WpHeadlessWPCSSTheme {
      colors: [WpHeadlessWPColor]
      modes: [WpHeadlessWPColorModes]
    }

    type WpHeadlessWPColor {
      hexValue: String
      name: String
    }

    type WpHeadlessWPColorModes {
      colors: [WpHeadlessWPColor]
      name: String
    }
  `)
}
