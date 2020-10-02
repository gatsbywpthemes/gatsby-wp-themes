const defaultOptions = require(`./utils/defaultOptions`)
const createPosts = require(`./utils/createPosts`)
const createSitePages = require(`./utils/createSitePages`)
const createCategories = require(`./utils/createCategories`)
const createTags = require(`./utils/createTags`)
const createUsers = require(`./utils/createUsers`)

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  /**
   * Merged default theme settings and user settings.
   */

  const queryTypes = await graphql(`
    query {
      __type(name: "Wp") {
        fields {
          name
        }
      }
    }
  `)

  const seoFromWP = queryTypes.data.__type.fields
    .map((el) => el.name)
    .includes('seo')

  const conditionalSeoQuery = seoFromWP
    ? `seo {
      social {
        facebook {
          url
        }
        linkedIn {
          url
        }
        twitter {
          cardType
          username
        }
      }
      schema {
        siteName
        wordpressSiteName
        inLanguage
      }
      openGraph {
        defaultImage {
          localFile {
            childImageSharp {
              original {
                src
                height
                width
              }
            }
          }
        }
      }
    }`
    : ``

  const { data } = await graphql(`
  query {
    wp {
      allSettings {
        readingSettingsPostsPerPage
      }
    ${conditionalSeoQuery}
    }
  }
  `)

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    postsPerPage: data.wp.allSettings.readingSettingsPostsPerPage,
    seoFromWP,
    generalSeoSettings: data.wp.seo,
  }

  await createPosts({ actions, graphql }, mergedOptions)
  await createSitePages({ actions, graphql }, mergedOptions)
  await createCategories({ actions, graphql }, mergedOptions)
  await createTags({ actions, graphql }, mergedOptions)
  await createUsers({ actions, graphql }, mergedOptions)
}
