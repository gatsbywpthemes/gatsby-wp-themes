/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { CommentForm, Comment } from './index'
import { commentStyles } from '../../styles'
import Loader from 'react-spinners/BeatLoader'

const GET_COMMENTS = gql`
  query($postId: ID!) {
    comments(where: { contentId: $postId, order: ASC }) {
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
  }
`

export const CommentsList = ({ post }) => {
  const postId = post.databaseId
  const [activeComment, setActiveComment] = useState(0)
  const cancelReply = () => {
    setActiveComment(0)
  }
  const addReply = (id) => {
    setActiveComment(id)
  }
  const { data, loading, error, refetch } = useQuery(GET_COMMENTS, {
    variables: { postId },
  })

  const doOnCompleted = () => {
    refetch()
  }

  if (loading)
    return (
      <Fragment>
        <span sx={{ color: 'text' }}>Comments are loading...</span>
        <Loader size={8} margin={5} />
      </Fragment>
    )
  if (error) return `Error loading comments...`

  const comments = data.comments.nodes
  return (
    <section>
      {comments.length > 0 ? (
        <section sx={commentStyles.section}>
          <h2 sx={commentStyles.title}>Comments</h2>
          <ul sx={commentStyles.list}>
            {comments
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
        <p sx={{ color: 'text' }}>No comments yet</p>
      )}
      {activeComment === 0 && (
        <CommentForm
          postId={postId}
          doOnCompleted={doOnCompleted}
          cancelReply={cancelReply}
        />
      )}
    </section>
  )
}
