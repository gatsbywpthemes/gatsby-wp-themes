import { graphql } from "gatsby";

export const fragment = graphql`
  fragment logosBlock on WpPage_Layoutblocks_Blocks_LogosBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    logos {
      logo {
        ...smallImage
      }
      url
    }
  }
  fragment postLogosBlock on WpPost_Layoutblocks_Blocks_LogosBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    logos {
      logo {
        ...smallImage
      }
      url
    }
  }
  fragment projectLogosBlock on WpProject_Layoutblocks_Blocks_LogosBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    logos {
      logo {
        ...smallImage
      }
      url
    }
  }
`;
