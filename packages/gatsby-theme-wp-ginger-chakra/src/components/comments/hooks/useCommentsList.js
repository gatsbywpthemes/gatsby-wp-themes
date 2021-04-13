import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_COMMENTS = gql`
  query($databaseId: ID!) {
    comments(where: { contentId: $databaseId, order: ASC }, first: 1000) {
      nodes {
        ...CommentFields
        replies(where: { order: ASC }) {
          nodes {
            ...CommentFields
            replies(where: { order: ASC }) {
              nodes {
                ...CommentFields
              }
            }
          }
        }
      }
    }
  }

  fragment CommentFields on Comment {
    id
    date
    approved
    content
    commentId
    parent {
      node {
        id
        commentId
      }
    }
    author {
      node {
        ...AuthorFields
      }
    }
  }
  fragment AuthorFields on CommentAuthor {
    name
    url
    email
  }
`

export const useCommentsList = ({ databaseId }) => {
  const { data, loading, error, refetch } = useQuery(GET_COMMENTS, {
    variables: { databaseId },
  })
  const doOnCompleted = () => {
    refetch()
  }

  return {
    databaseId,
    comments: data?.comments,
    loading,
    error,
    doOnCompleted,
  }
}
