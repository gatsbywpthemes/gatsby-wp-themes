import { useStaticQuery, graphql } from "gatsby"

const GET_SEO_GENERAL = graphql`
  query {
    wp {
      seo {
        social {
          facebook {
            url
          }
          linkedIn {
            url
          }
          twitter {
            username
            cardType
          }
        }
        schema {
          siteName
          wordpressSiteName
          inLanguage
        }
        openGraph {
          frontPage {
            title
            description
            image {
              localFile {
                childImageSharp {
                  original {
                    height
                    src
                    width
                  }
                }
              }
            }
          }
          defaultImage {
            localFile {
              childImageSharp {
                original {
                  height
                  src
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`

export const useSeoGeneral = () => {
  const seoGeneral = useStaticQuery(GET_SEO_GENERAL)
  return seoGeneral
}
