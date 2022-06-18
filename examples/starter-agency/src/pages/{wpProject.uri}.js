import React from "react"
import { graphql } from "gatsby"
import { Layout } from "~/components/Layout"
import {
  ContentBlock,
  SectionsBlock,
  CoverBlock,
  FeaturesBlock,
  AccordionBlock,
  TestimonialsBlock,
  PricingBlock,
  ProjectsBlock,
  SpacerBlock,
  LogosBlock,
  LastsPostsBlock,
  GalleryBlock,
} from "@gatsbywpthemes/gatsby-theme-acf-builder/src"

const ProjectPage = ({ data }) => {
  const { wpProject } = data
  const {
    title,
    content,
    projectFields: { projectUrl },
    layoutBlocks: { blocks },
    featuredImage,
  } = wpProject

  return (
    <Layout>
      <div className="space-y-5">
        <h2>{title}</h2>
        {blocks?.length > 0 &&
          blocks.map((block, index) => {
            let blockRef = { ...block, key: index }
            switch (block.__typename) {
              case "WpProject_Layoutblocks_Blocks_ContentBlock":
                return <ContentBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_SectionsBlock":
                return <SectionsBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_CoverBlock":
                return <CoverBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_FeaturesBlock":
                return <FeaturesBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_AccordionBlock":
                return <AccordionBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_TestimonialsBlock":
                return <TestimonialsBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_PricingBlock":
                return <PricingBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_ProjectsBlock":
                return <ProjectsBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_SpacerBlock":
                return <SpacerBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_LogosBlock":
                return <LogosBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_LastsPostsBlock":
                return <LastsPostsBlock {...blockRef} />
              case "WpProject_Layoutblocks_Blocks_GalleryPostsBlock":
                return <GalleryBlock {...blockRef} />
              default:
                return null
            }
          })}
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <div>
          Project url:{" "}
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            {projectUrl}
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ($uri: String!) {
    wpProject(uri: { eq: $uri }) {
      uri
      title
      content
      featuredImage {
        node {
          ...basicImage
        }
      }
      layoutBlocks {
        blocks {
          __typename
          ...projectContentBlock
          ...projectSectionsBlock
          ...projectCoverBlock
          ...projectFeaturesBlock
          ...projectAccordionBlock
          ...projectTestimonialsBlock
          ...projectPricingBlock
          ...ProjectProjectsBlock
          ...projectGalleryBlock
          ...projectSpacerBlock
          ...projectLogosBlock
          ...projectLastsPostsBlock
        }
      }
      projectFields {
        projectUrl
      }
    }
  }
`
