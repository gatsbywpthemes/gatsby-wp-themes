import { graphql } from 'gatsby'
import SinglePost from '../components/Post'

export default SinglePost

export const pageQuery = graphql`
  query GET_POST_STARTER($id: ID!) {
    wp {
      post(id: $id) {
        content
        ...PostTemplateFragment_starter
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
