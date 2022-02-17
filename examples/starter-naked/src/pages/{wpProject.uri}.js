import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"

const ProjectPage = ({ data }) => {
  const { wpProject: project } = data || {}
  return (
    <Layout>
      <div>{project.title}</div>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ($uri: String!) {
    wpProject(uri: { eq: $uri }) {
      title
    }
  }
`
