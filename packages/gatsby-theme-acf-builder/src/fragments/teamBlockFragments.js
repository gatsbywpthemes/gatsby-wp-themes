import { graphql } from "gatsby";

export const fragment = graphql`
  fragment contentBlock on WpPage_Layoutblocks_Blocks_TeamBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    team {
      team {
        cssClass
        description
        name
        position
        social {
          image {
            ...basicImage
          }
          url
        }
        picture {
          ...basicImage
        }
      }
    }
  }
  fragment postContentBlock on WpPost_Layoutblocks_Blocks_TeamBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    team {
      cssClass
      description
      name
      position
      social {
        image {
          ...basicImage
        }
        url
      }
      picture {
        ...basicImage
      }
    }
  }
  fragment projectContentBlock on WpProject_Layoutblocks_Blocks_TeamBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    team {
      cssClass
      description
      name
      position
      social {
        image {
          ...basicImage
        }
        url
      }
      picture {
        ...basicImage
      }
    }
  }
`;
