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
    gatsbyImage(quality: 80, layout: CONSTRAINED, width: 1920)
    localFile {
      publicURL
    }
  }
  fragment coverImage on WpMediaItem {
    altText
    sourceUrl
    gatsbyImage(quality: 80, layout: FULL_WIDTH, width: 1920)
    localFile {
      publicURL
    }
  }
`;
