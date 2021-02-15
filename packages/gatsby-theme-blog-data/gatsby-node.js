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

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }

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

  const settingsFromWP = queryTypes.data.__type.fields
    .map((el) => el.name)
    .includes('headlesswp')

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

  Object.assign(mergedOptions, {
    postsPerPage: data.wp.allSettings.readingSettingsPostsPerPage,
    seoFromWP,
    generalSeoSettings: data.wp.seo,
    postsPath,
    paginationPrefix: data.wp.headlesswp
      ? data.wp.headlesswp.paginationPrefix
      : 'page',
  })

  await createPosts({ actions, graphql }, mergedOptions)
  await createSitePages({ actions, graphql }, mergedOptions)
  await createCategories({ actions, graphql }, mergedOptions)
  await createTags({ actions, graphql }, mergedOptions)
  await createUsers({ actions, graphql }, mergedOptions)
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Wp {
      headlesswp: HeadlessWPConfig
    }
    
    type HeadlessWPConfig {
      paginationPrefix: String
      logo: WpMediaItem
      darkModeLogo: WpMediaItem
      favicon: WpMediaItem
      widgetAreas: [HeadlessWPWidgetAreas]
      archiveSidebarPosition: String
      addWordPressComments: Boolean
      addWordPressSearch: Boolean
      socialFollowLinks: [HeadlessWPSocial]
      cssTheme: HeadlessWPCSSTheme
    }

    type HeadlessWPWidgetAreas {
      name: String
      widgets: [String]
    }

    type HeadlessWPSocial {
      name: String
      url: String
    }

    type HeadlessWPCSSTheme {
      colors: [HeadlessWPColor]
      modes: [HeadlessWPColorModes]
    }

    type HeadlessWPColor {
      hexValue: String
      name: String
    }

    type HeadlessWPColorModes {
      colors: [HeadlessWPColor]
      name: String
    }
  `)
}
