import { graphql } from 'gatsby'
import SinglePost from '../components/Post'

export default SinglePost

export const pageQuery = graphql`
  query($uri: String!, $seo: Boolean = false) {
    wpPost(uri: { eq: $uri }) {
      content
      commentStatus
      databaseId
      ...PostTemplateFragmentFull
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
