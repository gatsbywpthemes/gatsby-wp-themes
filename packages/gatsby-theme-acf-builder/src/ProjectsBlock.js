import React from "react"
import { graphql } from "gatsby"
import { HeadlineContent } from "./HeadlineContent"
import { Image } from "./ui-components"
import { Link } from "gatsby"

export const fragment = graphql`
  fragment projectsBlock on WpPage_Layoutblocks_Blocks_ProjectsBlock {
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
        tags {
          nodes {
            id
            name
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
            projectFields: { projectUrl, projectShortDescription },
            featuredImage,
            tags,
          } = project
          return (
            <div className="project" key={id}>
              <Link to={uri}>
                {featuredImage && (
                  <Image
                    img={featuredImage.node}
                    className="project-image-container"
                    imgClassName="project-image"
                  />
                )}
                <h3 className="headline">{title}</h3>
              </Link>
              {tags?.nodes?.length > 0 && (
                <div className="tags">
                  {tags.nodes.map((tag, index) => (
                    <div className="tag" key={tag.id}>
                      {tag.name}
                      {tags.nodes.length !== index + 1 && (
                        <span className="separator">.</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div className="project-description">
                {projectShortDescription}
              </div>
              <div className="button-container">
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  View demo
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsBlock
