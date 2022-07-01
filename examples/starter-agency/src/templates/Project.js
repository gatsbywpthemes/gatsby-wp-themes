import React from "react"
import { graphql } from "gatsby"
import { Image } from "~/components/ui-components"
import { Layout } from "~/components/Layout"
import { useDefaultImages } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/hooks/useDefaultImages"
import { ProjectBlocks } from "~/components/blocks/ProjectBlocks"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { useSeoGeneral } from "~/lib/hooks/useSeoGeneral"
import { PrevNextPostNavigation } from "~/components/post/PrevNextPostNavigation"

const Project = ({ data, pageContext }) => {
  const { wpProject } = data
  const {
    title,
    uri,
    slug,
    content,
    projectFields: { projectUrl, projectShortDescription },
    layoutBlocks: { blocks },
    featuredImage,
  } = wpProject

  const { projectDefaultImage } = useDefaultImages()
  const image = featuredImage ? featuredImage.node : projectDefaultImage
  const seoGeneral = useSeoGeneral()
  const seoImage = featuredImage?.node?.localFile?.childImageSharp?.original

  const seo = {
    page: wpProject?.seo,
    general: seoGeneral?.wp?.seo,
  }

  //Styles are the same as the cover-block and can be found in /styles/acfBlocks/cover-block.css

  return (
    <Layout type="project" className="w-full py-0" page={slug}>
      <Seo
        title={title}
        uri={uri}
        yoastSeo={true}
        seo={seo}
        featuredImage={
          seoImage && {
            src: seoImage.src,
            width: seoImage.width,
            height: seoImage.height,
          }
        }
      />
      <div className="project-hero">
        <Image img={image} className="w-full h-screen" />
        <div className="overlay">
          <div className="cover-content">
            <h1 className="headline">{title}</h1>
            <div
              className="content-text"
              dangerouslySetInnerHTML={{ __html: projectShortDescription }}
            />
            {projectUrl && (
              <div className="button-container">
                <a
                  className="button"
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit project
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <ProjectBlocks blocks={blocks} />
      {content && <p dangerouslySetInnerHTML={{ __html: content }} />}
      <PrevNextPostNavigation
        prev={pageContext?.prev}
        next={pageContext?.next}
        className="max-w-lg mt-0 mb-10 center-container"
      />
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query ($uri: String!) {
    wpProject(uri: { eq: $uri }) {
      uri
      title
      slug
      content
      seo {
        ...SeoPage
      }
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
          ...projectTeamBlock
        }
      }
      projectFields {
        projectUrl
        projectShortDescription
      }
    }
  }
`
