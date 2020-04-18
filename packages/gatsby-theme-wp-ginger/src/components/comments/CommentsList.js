/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { commentStyles } from '../../styles/comments'

const GET_COMMENTS = gql`
  query($postId: ID!) {
    comments(where: { contentId: $postId, order: ASC }) {
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

  fragment CommentFields on Comment {
    id
    date
    approved
    content
    commentId
    author {
      ...AuthorFields
    }
  }
  fragment AuthorFields on CommentAuthor {
    name
    url
    email
  }
`

const CommentsList = ({ post, reloading }) => {
  const postId = post.databaseId
  const { data, loading, error, refetch } = useQuery(GET_COMMENTS, {
    variables: { postId },
  })
  const [activeComment, setActiveComment] = useState(0)
  const cancelReply = () => {
    setActiveComment(0)
  }
  const addReply = id => {
    setActiveComment(id)
  }
  const doOnCompleted = () => {
    refetch()
    setActiveComment(0)
  }
  if (loading) return <p>Loading comments&hellip;</p>
  if (error) return <p>Some errors occur.</p>
  const comments = data.comments
  return (
    <Fragment>
      {comments.nodes.length > 0 ? (
        <section>
          <h2 sx={{ ...commentStyles.title }}>Comments</h2>
          <ul sx={{ ...commentStyles.list }}>
            {comments.nodes.map(comment => (
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
                {comment.children.nodes.length > 0 && (
                  <ul>
                    {comment.children.nodes.map(reply => (
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
                        {reply.children.nodes.length > 0 && (
                          <ul>
                            {reply.children.nodes.map(replyRe => (
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
        <p sx={{ ...commentStyles.noComments }}>No comments yet</p>
      )}
      {activeComment === 0 && (
        <CommentForm postId={postId} doOnCompleted={doOnCompleted} />
      )}
    </Fragment>
  )
}

export default CommentsList
