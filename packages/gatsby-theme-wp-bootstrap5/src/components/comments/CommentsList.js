import React from 'react'
import { Fragment, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { CommentForm, Comment } from './index'

const GET_COMMENTS = gql`
  query($postId: ID!) {
    comments(where: { contentId: $postId, order: ASC }, first: 1000) {
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

export const CommentsList = ({ post, reloading }) => {
  const postId = post.databaseId
  const { data, loading, error, refetch } = useQuery(GET_COMMENTS, {
    variables: { postId },
  })
  const [activeComment, setActiveComment] = useState(0)
  const cancelReply = () => {
    setActiveComment(0)
  }
  const addReply = (id) => {
    setActiveComment(id)
  }
  const doOnCompleted = () => {
    refetch()
  }
  if (loading) return <p>Loading comments&hellip;</p>
  if (error) return <p>Some errors occur.</p>
  const comments = data.comments
  return (
    <Fragment>
      {comments.nodes.length > 0 ? (
        <section>
          <h2 className="text-center h3 mb-4">Comments</h2>
          <ul className="comments-list list-group mb-5">
            {comments.nodes
              .filter((el) => el.parent === null)
              .map((comment) => (
                <Fragment key={comment.id}>
                  <Comment
                    withReply={true}
                    postId={postId}
                    activeComment={activeComment}
                    comment={comment}
                    addReply={addReply}
                    cancelReply={cancelReply}
                    doOnCompleted={doOnCompleted}
                  ></Comment>
                  {comment.replies.nodes.length > 0 && (
                    <ul>
                      {comment.replies.nodes.map((reply) => (
                        <Fragment key={reply.id}>
                          <Comment
                            withReply={true}
                            postId={postId}
                            activeComment={activeComment}
                            comment={reply}
                            addReply={addReply}
                            cancelReply={cancelReply}
                            doOnCompleted={doOnCompleted}
                          ></Comment>
                          {reply.replies.nodes.length > 0 && (
                            <ul>
                              {reply.replies.nodes.map((replyRe) => (
                                <Comment
                                  withReply={false}
                                  key={replyRe.id}
                                  comment={replyRe}
                                  doOnCompleted={doOnCompleted}
                                />
                              ))}
                            </ul>
                          )}
                        </Fragment>
                      ))}
                    </ul>
                  )}
                </Fragment>
              ))}
          </ul>
        </section>
      ) : (
        <p>No comments yet</p>
      )}
      {activeComment === 0 && (
        <CommentForm
          postId={postId}
          doOnCompleted={doOnCompleted}
          cancelReply={cancelReply}
        />
      )}
    </Fragment>
  )
}
