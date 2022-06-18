import { graphql } from "gatsby";

export const fragment = graphql`
  fragment project on WpProject {
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
    tags {
      nodes {
        id
        name
      }
    }
  }
  fragment projectsBlock on WpPage_Layoutblocks_Blocks_ProjectsBlock {
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
        ...project
      }
    }
  }

  fragment postProjectsBlock on WpPost_Layoutblocks_Blocks_ProjectsBlock {
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
        ...project
      }
    }
  }

  fragment ProjectProjectsBlock on WpProject_Layoutblocks_Blocks_ProjectsBlock {
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
        ...project
      }
    }
  }
`;
