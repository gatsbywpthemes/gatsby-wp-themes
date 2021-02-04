const defaultOptions = require(`./utils/defaultOptions`)
const createPosts = require(`./utils/createPosts`)
const createSitePages = require(`./utils/createSitePages`)
const createCategories = require(`./utils/createCategories`)
const createTags = require(`./utils/createTags`)
const createUsers = require(`./utils/createUsers`)
const generalSeoFromWP = require(`./utils/seo/generalSeoFromWP`)
const themeSettingsFromQuery = require(`./utils/themeSettingsFromQuery`)

exports.createPages = async (
  { store, actions, graphql, reporter },
  options
) => {
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
        }
      }
    }
  `)

  const seoFromWP =
    options.seoWithYoast &&
    queryTypes.data.__type.fields.map((el) => el.name).includes('seo')

  const settingsFromWP = queryTypes.data.__type.fields
    .map((el) => el.name)
    .includes('gatsbywpthemes')

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
    paginationPrefix: data.wp.gatsbywpthemes
      ? data.wp.gatsbywpthemes.paginationPrefix
      : 'page',
  })

  await createPosts({ actions, graphql }, mergedOptions)
  await createSitePages({ actions, graphql }, mergedOptions)
  await createCategories({ actions, graphql }, mergedOptions)
  await createTags({ actions, graphql }, mergedOptions)
  await createUsers({ actions, graphql }, mergedOptions)

  const state = store.getState()
  const plugin = state.flattenedPlugins.find(
    (plugin) => plugin.name === 'gatsby-plugin-webfonts'
  )
  if (plugin) {
    console.log('!!!!!!FOUND YOU')
    const favicon = await graphql(`
      query {
        wp {
          gatsbywpthemes {
            favicon {
              localFile {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `)
    console.log(plugin.pluginOptions.fonts.google)
    plugin.pluginOptions.fonts.google = [
      { family: 'Arbutus', variants: undefined },
    ]

    plugin.pluginOptions = {
      ...plugin.pluginOptions,
    }
    console.log(plugin.pluginOptions.fonts.google)
  }

  /*const state = store.getState()
  const plugin = state.flattenedPlugins.find(
    (plugin) => plugin.name === 'gatsby-plugin-manifest'
  )
  if (plugin) {
    console.log('!!!!!!FOUND YOU')
    const favicon = await graphql(`
      query {
        wp {
          gatsbywpthemes {
            favicon {
              localFile {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `)
    console.log(
      favicon.data.wp.gatsbywpthemes.favicon.localFile.childImageSharp.fixed.src
    )

    plugin.pluginOptions = {
      ...plugin.pluginOptions,
      icon: `./public${favicon.data.wp.gatsbywpthemes.favicon.localFile.childImageSharp.fixed.src}`,
    }
  }
  */
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Wp {
      gatsbywpthemes: WpGatsbyWPThemesConfig
    }
    
    type WpGatsbyWPThemesConfig {
      paginationPrefix: String
      logo: WpMediaItem
      darkModeLogo: WpMediaItem
      favicon: WpMediaItem
      slideMenuWidgets: [String]
      sidebarWidgets: [String]
      addWordPressComments: Boolean
      addWordPressSearch: Boolean
      cssTheme: GatsbyWPThemesCSSTheme
      socialFollowLinks: [GatsbyWPThemesSocial]
    }

    type GatsbyWPThemesSocial {
      name: String
      url: String
    }

    type GatsbyWPThemesCSSTheme {
      colors: [GatsbyWPThemesColor]
      modes: [GatsbyWPThemesColorModes]
    }

    type GatsbyWPThemesColor {
      hexValue: String
      name: String
    }

    type GatsbyWPThemesColorModes {
      colors: [GatsbyWPThemesColor]
      name: String
    }
  `)
}
