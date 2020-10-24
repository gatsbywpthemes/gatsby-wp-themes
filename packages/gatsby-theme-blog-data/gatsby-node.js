const defaultOptions = require(`./utils/defaultOptions`)
const createPosts = require(`./utils/createPosts`)
const createSitePages = require(`./utils/createSitePages`)
const createCategories = require(`./utils/createCategories`)
const createTags = require(`./utils/createTags`)
const createUsers = require(`./utils/createUsers`)
const generalSeoFromWP = require(`./utils/seo/generalSeoFromWP`)

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
        }
      }
    }
  `)

  const seoFromWP =
    options.seoWithYoast &&
    queryTypes.data.__type.fields.map((el) => el.name).includes('seo')

  const conditionalSeoQuery = seoFromWP ? generalSeoFromWP : ``

  const { data } = await graphql(`
    query {
      wp {
        allSettings {
          readingSettingsPostsPerPage
        }
        ${conditionalSeoQuery}
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
  })

  await createPosts({ actions, graphql }, mergedOptions)
  await createSitePages({ actions, graphql }, mergedOptions)
  await createCategories({ actions, graphql }, mergedOptions)
  await createTags({ actions, graphql }, mergedOptions)
  await createUsers({ actions, graphql }, mergedOptions)
}
