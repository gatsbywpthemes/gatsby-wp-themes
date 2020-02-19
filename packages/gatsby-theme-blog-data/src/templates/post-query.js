import { graphql } from 'gatsby'
import SinglePost from '../components/Post'

export default SinglePost

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wp {
      post(id: $id) {
        content
        ...PostTemplateFragment
        commentStatus
      }
    }
  }
`
