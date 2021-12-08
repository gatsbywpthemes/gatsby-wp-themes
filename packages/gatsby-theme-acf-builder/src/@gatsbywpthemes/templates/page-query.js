import { graphql } from "gatsby"
import Page from "@gatsbywpthemes/gatsby-theme-blog-data/src/components/page"

export default Page

export const pageQuery = graphql`
  query ($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      title
      content
      uri
      slug
      isFrontPage
      layoutBlocks {
        blocks {
          __typename
          ...contentBlock
          ...sectionsBlock
        }
      }
      template {
        templateName
      }
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
      headlesswp {
        pageTemplate
        skipTitle
      }
    }
  }
`
