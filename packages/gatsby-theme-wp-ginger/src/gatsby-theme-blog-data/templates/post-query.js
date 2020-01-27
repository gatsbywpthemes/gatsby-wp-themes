import { graphql } from 'gatsby'
import SinglePost from '../components/Post'

export default SinglePost

export const pageQuery = graphql`
  query GET_POST1($id: ID!) {
    wp {
      post(id: $id) {
        content
        ...PostTemplateFragment2
        commentStatus
        comments(where: { order: ASC }) {
          nodes {
            ...CommentFields
            children(where: { order: ASC }) {
              nodes {
                ...CommentFields
                children(where: { order: ASC }) {
                  nodes {
                    ...CommentFields
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
