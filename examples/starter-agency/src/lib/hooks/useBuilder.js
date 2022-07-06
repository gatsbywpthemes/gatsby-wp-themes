import { useStaticQuery, graphql } from "gatsby"

const GET_BUILDER_OPTIONS = graphql`
  query {
    wp {
      themeOptions {
        useBuilder {
          pages
          posts
          projects
        }
      }
    }
  }
`

export const useBuilder = () => {
  const builderOptions = useStaticQuery(GET_BUILDER_OPTIONS)
  return builderOptions.wp.themeOptions.useBuilder
}
