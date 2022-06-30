import React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "~/components/Layout"
import { PageTitle, Image } from "~/components/ui-components"
import { IoAddSharp as PlusIcon } from "react-icons/io5"

const Projects = ({ data, pageContext }) => {
  const projects = data.allWpProject.nodes
  return (
    <Layout>
      <PageTitle title="projects" />
      <div className="-mx-10">
        {projects.map((project, index) => {
          const {
            title,
            featuredImage,
            uri,
            projectFields: { projectShortDescription, projectUrl },
          } = project
          return (
            <div
              key={index}
              className="items-center md:flex even:flex-row-reverse"
            >
              <Link to={uri} className="relative flex-1">
                <Image img={featuredImage.node} className="relative aspect-1" />
                <div className="absolute inset-0 flex items-center justify-center transition duration-500 bg-opacity-75 opacity-0 overlay bg-highlight hover:opacity-100">
                  <PlusIcon className="text-white transition duration-1000 text-7xl hover:scale-150" />
                </div>
              </Link>
              <div className="flex-1">
                <div className="p-10 space-y-3">
                  <h1>{title}</h1>
                  <p>{projectShortDescription}</p>
                  {projectUrl && (
                    <a
                      href={projectUrl}
                      className="inline-block bg-black btn hover:bg-highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpProject(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        title
        uri
        id
        featuredImage {
          node {
            ...basicImage
          }
        }
        projectFields {
          projectShortDescription
          projectUrl
        }
      }
    }
  }
`
