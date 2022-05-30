import React from "react"
import { graphql, Link } from "gatsby"
import { HeadlineContent } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/HeadlineContent"
import { Image } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/ui-components"
import {
  AiOutlineLink as LinkIcon,
  AiOutlinePlus as PlusIcon,
} from "react-icons/ai"
import { GatsbyImage } from "gatsby-plugin-image"

export const fragment = graphql`
  fragment projectsBlock_agency on WpPage_Layoutblocks_Blocks_ProjectsBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
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

const ProjectsBlock = ({
  cssClass,
  anchorId,
  content,
  headline,
  headlineTag,
  projects,
  ...props
}) => {
  return (
    <section
      className={`projects-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      {(headline || content) && (
        <HeadlineContent
          headline={headline}
          content={content}
          headlineTag={headlineTag}
        />
      )}
      <div className="projects">
        {projects?.map((project) => {
          const {
            id,
            title,
            uri,
            projectFields: { projectUrl },
            featuredImage,
            tags,
          } = project
          return (
            <div className="project" key={id}>
              {featuredImage && (
                <Image
                  img={featuredImage.node}
                  className="project-image-container"
                  imgClassName="project-image"
                  aspectRatio={1}
                  objectFit="cover"
                  objectPosition="center"
                />
              )}
              <div className="overlay">
                <div className="button-container">
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  >
                    <LinkIcon className="icon" />
                  </a>
                  <Link to={uri}>
                    <PlusIcon className="icon" />
                  </Link>
                </div>
                <h3 className="headline">
                  <Link to={uri}>{title}</Link>
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsBlock
