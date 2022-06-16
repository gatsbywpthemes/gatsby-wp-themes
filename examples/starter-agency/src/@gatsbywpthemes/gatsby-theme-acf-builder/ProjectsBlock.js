import React from "react"
import { graphql, Link } from "gatsby"
import { HeadlineContent } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/HeadlineContent"
import { Image } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/ui-components"
import {
  AiOutlineLink as LinkIcon,
  AiOutlinePlus as PlusIcon,
} from "react-icons/ai"

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

export const ProjectsBlock = ({
  cssClass,
  anchorId,
  content,
  headline,
  headlineTag,
  projects,
  allProjects,
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
      {allProjects && (
        <div className="flex justify-center button-container">
          <Link
            className="mt-10 transition duration-500 bg-black btn hover:bg-highlight"
            to={allProjects.url}
          >
            {allProjects.title}
          </Link>
        </div>
      )}
    </section>
  )
}
