import { graphql } from "gatsby";

export const fragments = graphql`
  fragment button on WpAcfLink {
    url
    title
    target
  }
  fragment basicImage on WpMediaItem {
    altText
    caption
    description
    sourceUrl
    localFile {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED)
      }
      publicURL
    }
  }
  fragment coverImage on WpMediaItem {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: FULL_WIDTH)
      }
      publicURL
    }
  }
`;