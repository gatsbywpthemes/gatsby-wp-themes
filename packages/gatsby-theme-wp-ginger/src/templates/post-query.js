import { graphql } from 'gatsby'
import SinglePost from '../gatsby-theme-blog-data/components/Post'

export default SinglePost

export const pageQuery = graphql`
  query GET_POST1($id: ID!) {
    wp {
      post(id: $id) {
        content
        ...PostTemplateFragment2
        commentStatus
        comments {
          nodes {
            ...CommentFields
            children {
              nodes {
                ...CommentFields
                children {
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
