import { graphql } from "gatsby"

export const fragments = graphql`
  fragment button on WpAcfLink {
    url
    title
    target
  }
  fragment basicImage on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED)
      }
    }
  }
  fragment coverImage on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        gatsbyImageData(quality: 80, layout: FULL_WIDTH)
      }
    }
  }
`
