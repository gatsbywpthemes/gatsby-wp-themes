import { graphql } from "gatsby"
export const fragments = graphql`
  fragment SeoPage on WpPostTypeSEO {
    metaDesc
    metaKeywords
    opengraphAuthor
    opengraphDescription
    schema {
      articleType
      pageType
      raw
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
`
