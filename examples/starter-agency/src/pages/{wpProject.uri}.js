import React from "react"
import { graphql } from "gatsby"
import { Image } from "~/components/ui-components"
import { Layout } from "~/components/Layout"
import { useDefaultImages } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/hooks/useDefaultImages"
import { ProjectBlocks } from "~/components/blocks/ProjectBlocks"

const ProjectPage = ({ data }) => {
  const { wpProject } = data
  const {
    title,
    content,
    projectFields: { projectUrl, projectShortDescription },
    layoutBlocks: { blocks },
    featuredImage,
  } = wpProject

  const { projectDefaultImage } = useDefaultImages()
  const image = featuredImage ? featuredImage.node : projectDefaultImage

  //Styles are the same as the cover-block and can be found in /styles/acfBlocks/cover-block.css

  return (
    <Layout type="project" className="w-full py-0">
      <div className="project-hero">
        <Image img={image} className="w-full h-screen" />
        <div className="overlay">
          <div className="cover-content">
            <h1 className="headline">{title}</h1>
            <div
              className="content-text"
              dangerouslySetInnerHTML={{ __html: projectShortDescription }}
            />
            <div className="button-container">
              <a
                className="button"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h2>{title}</h2>

        <ProjectBlocks blocks={blocks} />
        <p dangerouslySetInnerHTML={{ __html: content }} />
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
        projectShortDescription
      }
    }
  }
`
