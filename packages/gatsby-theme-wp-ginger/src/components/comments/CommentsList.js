/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { CommentForm, Comment } from './index'
import { commentsStyles } from '../../styles/'

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
        databaseId
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
  console.log(comments)
  return (
    <Fragment>
      {comments.nodes.length > 0 ? (
        <section>
          <h2 sx={{ ...commentsStyles.title }}>Comments</h2>
          <ul sx={{ ...commentsStyles.list }}>
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
        <p sx={{ ...commentsStyles.noComments }}>No comments yet</p>
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
