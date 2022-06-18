import { graphql } from "gatsby";

export const fragment = graphql`
  fragment pricingBlock on WpPage_Layoutblocks_Blocks_PricingBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    tables {
      cssClass
      price
      productId
      title
      description
      features {
        description
        feature
      }
    }
  }
  fragment postPricingBlock on WpPost_Layoutblocks_Blocks_PricingBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    tables {
      cssClass
      price
      productId
      title
      description
      features {
        description
        feature
      }
    }
  }
  fragment projectPricingBlock on WpProject_Layoutblocks_Blocks_PricingBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    tables {
      cssClass
      price
      productId
      title
      description
      features {
        description
        feature
      }
    }
  }
`;
