import React from "react"
import { graphql } from "gatsby"
import { Layout } from "~/components/Layout"

const ProjectPage = ({ data }) => {
  const { wpProject } = data
  const {
    title,
    content,
    projectFields: { projectUrl },
    featuredImage,
  } = wpProject

  return (
    <Layout>
      <div className="space-y-5">
        <h2>{title}</h2>
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
      projectFields {
        projectUrl
      }
    }
  }
`
