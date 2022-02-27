import { graphql } from "gatsby"
import SinglePost from "~/@gatsbywpthemes/gatsby-theme-wp-data/components/Post"

export default SinglePost

export const pageQuery = graphql`
  query ($uri: String!) {
    wpPost(uri: { eq: $uri }) {
      content
      commentStatus
      databaseId
      ...PostTemplateFragment_starter
    }
  }
`
