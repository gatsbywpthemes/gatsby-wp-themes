import React from "react"
import { graphql } from "gatsby"
import { Layout } from "~/components/Layout"
import Blocks from "~/components/blocks"

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

        <Blocks blocks={blocks} />
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
