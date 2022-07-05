import { graphql } from "gatsby";

export const fragment = graphql`
  fragment contentBlock on WpPage_Layoutblocks_Blocks_ContentBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    image {
      ...basicImage
    }
    button {
      ...button
    }
  }
  fragment postContentBlock on WpPost_Layoutblocks_Blocks_ContentBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    image {
      ...basicImage
    }
    button {
      ...button
    }
  }
  fragment projectContentBlock on WpProject_Layoutblocks_Blocks_ContentBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    image {
      ...basicImage
    }
    button {
      ...button
    }
  }
`;
