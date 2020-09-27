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

  const { data } = await graphql(
    `
      query($seo: Boolean!) {
        wp {
          allSettings {
            readingSettingsPostsPerPage
          }
          seo @include(if: $seo) {
            webmaster {
              googleVerify
              yandexVerify
              msVerify
              baiduVerify
            }
            schema {
              siteName
              wordpressSiteName
              siteUrl
              inLanguage
              companyName
              companyOrPerson
              companyLogo {
                mediaItemUrl
              }
              logo {
                mediaItemUrl
              }
              personLogo {
                mediaItemUrl
              }
            }
            breadcrumbs {
              showBlogPage
              separator
              searchPrefix
              prefix
              homeText
              enabled
              boldLast
              archivePrefix
              notFoundText
            }
            social {
              facebook {
                url
                defaultImage {
                  mediaItemUrl
                }
              }
              instagram {
                url
              }
              linkedIn {
                url
              }
              mySpace {
                url
              }
              pinterest {
                url
                metaTag
              }
              twitter {
                cardType
                username
              }
              wikipedia {
                url
              }
              youTube {
                url
              }
            }
            openGraph {
              frontPage {
                title
                description
                image {
                  altText
                  sourceUrl
                  mediaItemUrl
                }
              }
              defaultImage {
                altText
                sourceUrl
                mediaItemUrl
              }
            }
            # Redirects only work in the premium version of Yoast
            redirects {
              origin
              target
              format
              type
            }
          }
        }
      }
    `,
    { seo: options.seoWithYoast }
  )
  const postsPerPage = data.wp.allSettings.readingSettingsPostsPerPage
  const seoGlobalSettings = data.wp.seo

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    postsPerPage,
    seoGlobalSettings,
  }

  await createPosts({ actions, graphql }, mergedOptions)
  await createSitePages({ actions, graphql }, mergedOptions)
  await createCategories({ actions, graphql }, mergedOptions)
  await createTags({ actions, graphql }, mergedOptions)
  await createUsers({ actions, graphql }, mergedOptions)
}
