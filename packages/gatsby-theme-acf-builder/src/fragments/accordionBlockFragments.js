import { graphql } from "gatsby";
export const fragment = graphql`
  fragment accordionBlock on WpPage_Layoutblocks_Blocks_AccordionBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    accordionItems {
      headline
      content
    }
  }

  fragment postAccordionBlock on WpPost_Layoutblocks_Blocks_AccordionBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    accordionItems {
      headline
      content
    }
  }

  fragment projectAccordionBlock on WpProject_Layoutblocks_Blocks_AccordionBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    accordionItems {
      headline
      content
    }
  }
`;
