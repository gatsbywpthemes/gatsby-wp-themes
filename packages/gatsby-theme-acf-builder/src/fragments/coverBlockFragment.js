import { graphql } from "gatsby";
export const fragment = graphql`
  fragment coverBlock on WpPage_Layoutblocks_Blocks_CoverBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    image {
      ...coverImage
    }
    button {
      ...button
    }
  }

  fragment postCoverBlock on WpPost_Layoutblocks_Blocks_CoverBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    image {
      ...coverImage
    }
    button {
      ...button
    }
  }

  fragment projectCoverBlock on WpProject_Layoutblocks_Blocks_CoverBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    image {
      ...coverImage
    }
    button {
      ...button
    }
  }
`;
