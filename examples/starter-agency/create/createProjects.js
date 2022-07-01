const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const projectsTemplate = path.resolve(`./src/templates/Projects.js`)
const projectTemplate = path.resolve(`./src/templates/Project.js`)
const PageSeoFromWP = require(`@gatsbywpthemes/gatsby-theme-wp-data/utils/seo/pageSeoFromWP`)

const GET_PROJECTS = `
  query ($limit: Int) {
    allWpProject(limit: $limit, sort: { order: DESC, fields: date }) {
      edges {
        previous {
          uri
        }
        node {
          uri
          id
        }
        next {
          uri
        }
      }
    }
  }
`
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  //create a page for each project
  const projectsQuery = await graphql(GET_PROJECTS)
  const projects = projectsQuery.data.allWpProject.edges

  projects.map((project) => {
    createPage({
      path: project.node.uri,
      component: projectTemplate,
      context: {
        uri: project.node.uri,
        prev: project.previous ? project.previous.uri : null,
        next: project.next ? project.next.uri : null,
      },
    })
  })

  // Create a projects page containing all "projects" and paginate.

  paginate({
    createPage,
    pathPrefix: "/projects",
    component: projectsTemplate,
    items: projects,
    itemsPerPage: 4,
  })
}
