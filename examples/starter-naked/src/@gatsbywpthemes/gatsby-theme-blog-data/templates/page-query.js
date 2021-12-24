import { graphql } from "gatsby"
import Page from "../components/Page"

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
          ...coverBlock
          ...featuresBlock
          ...accordionBlock
          ...testimonialsBlock
          ...pricingBlock
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
