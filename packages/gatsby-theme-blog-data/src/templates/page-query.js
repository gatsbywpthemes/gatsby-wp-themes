import { graphql } from 'gatsby'
import Page from '../components/Page'

export default Page

export const pageQuery = graphql`
  query GET_PAGE($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      title
      content
      uri
      slug
      isFrontPage
      featuredImage {
        node {
          localFile {
            childImageSharp {
              original {
                width
                height
                src
              }
            }
          }
        }
      }
      template {
        __typename
      }
    }
  }
`
