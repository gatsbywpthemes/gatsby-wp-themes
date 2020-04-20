import { graphql } from 'gatsby'
import SinglePost from '../components/Post'

export default SinglePost

export const pageQuery = graphql`
  query GET_POST_STARTER($uri: String!) {
    wpPost(uri: { eq: $uri }) {
      content
      commentStatus
      databaseId
      ...PostTemplateFragment_starter
    }
  }
`
