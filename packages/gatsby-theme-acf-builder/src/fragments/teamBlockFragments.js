import { graphql } from "gatsby";

export const fragment = graphql`
  fragment teamBlock on WpPage_Layoutblocks_Blocks_TeamBlock {
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
          ...smallImage
        }
        url
      }
      picture {
        ...basicImage
      }
    }
  }
  fragment postTeamBlock on WpPost_Layoutblocks_Blocks_TeamBlock {
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
          ...smallImage
        }
        url
      }
      picture {
        ...basicImage
      }
    }
  }
  fragment projectTeamBlock on WpProject_Layoutblocks_Blocks_TeamBlock {
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
          ...smallImage
        }
        url
      }
      picture {
        ...basicImage
      }
    }
  }
`;
