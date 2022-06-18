import { graphql } from "gatsby"

export const fragment = graphql`
  fragment projectsBlock_agency on WpPage_Layoutblocks_Blocks_ProjectsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    allProjects {
      target
      title
      url
    }
    projects {
      ... on WpProject {
        id
        title
        uri
        projectFields {
          projectUrl
          projectShortDescription
        }
        featuredImage {
          node {
            ...basicImage
          }
        }
      }
    }
  }
`
