import { graphql } from "gatsby";

export const fragment = graphql`
  fragment spacerBlock on WpPage_Layoutblocks_Blocks_SpacerBlock {
    cssClass
  }
  fragment postSpacerBlock on WpPost_Layoutblocks_Blocks_SpacerBlock {
    cssClass
  }
  fragment projectSpacerBlock on WpProject_Layoutblocks_Blocks_SpacerBlock {
    cssClass
  }
`;
