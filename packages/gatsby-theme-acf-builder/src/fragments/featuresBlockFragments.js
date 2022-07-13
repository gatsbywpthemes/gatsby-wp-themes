import { graphql } from "gatsby";

export const fragment = graphql`
  fragment featuresBlock on WpPage_Layoutblocks_Blocks_FeaturesBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    features {
      cssClass
      headline
      headlineTag
      image {
        ...smallImage
      }
      content
      button {
        ...button
      }
    }
  }
  fragment postFeaturesBlock on WpPost_Layoutblocks_Blocks_FeaturesBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    features {
      cssClass
      headline
      headlineTag
      image {
        ...smallImage
      }
      content
      button {
        ...button
      }
    }
  }
  fragment projectFeaturesBlock on WpProject_Layoutblocks_Blocks_FeaturesBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    features {
      cssClass
      headline
      headlineTag
      image {
        ...smallImage
      }
      content
      button {
        ...button
      }
    }
  }
`;
