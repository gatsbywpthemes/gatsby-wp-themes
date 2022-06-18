import { graphql } from "gatsby";

export const fragment = graphql`
  fragment sectionsBlock on WpPage_Layoutblocks_Blocks_SectionsBlock {
    cssClass
    anchorId
    sections {
      cssClass
      headline
      headlineTag
      content
      button {
        ...button
      }
    }
  }
  fragment postSectionsBlock on WpPost_Layoutblocks_Blocks_SectionsBlock {
    cssClass
    anchorId
    sections {
      cssClass
      headline
      headlineTag
      content
      button {
        ...button
      }
    }
  }
  fragment projectSectionsBlock on WpProject_Layoutblocks_Blocks_SectionsBlock {
    cssClass
    anchorId
    sections {
      cssClass
      headline
      headlineTag
      content
      button {
        ...button
      }
    }
  }
`;
