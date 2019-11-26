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

  fragment CommentFields on WP_Comment {
    id
    date
    approved
    content
    commentId
    author {
      ... on WP_User {
        email
        name
        url
      }
      ... on WP_CommentAuthor {
        email
        name
        url
      }
    }
  }
`
