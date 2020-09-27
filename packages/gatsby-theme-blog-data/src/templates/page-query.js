import { graphql } from 'gatsby'
import Page from '../components/Page'

export default Page

export const pageQuery = graphql`
  query GET_PAGE($uri: String!, $seo: Boolean = false) {
    wpPage(uri: { eq: $uri }) {
      title
      content
      uri
      slug
      isFrontPage
      featuredImage {
        node {
          ...GatsbyImageQueryArchive
        }
      }
      template {
        ...PageTemplate
      }
      seo @include(if: $seo) {
        metaDesc
        metaKeywords
        opengraphAuthor
        opengraphDescription
        schema {
          articleType
          pageType
        }
        opengraphType
        opengraphTitle
        opengraphModifiedTime
        opengraphUrl
        twitterDescription
        twitterTitle
        cornerstone
        title
        opengraphImage {
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
        twitterImage {
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
    }
  }
`
