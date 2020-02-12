/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Comment from './Comment'
import CommentForm from './CommentForm'
import commentStyles from '../../styles/commentStyles'
import Loader from 'react-spinners/BeatLoader'

const GET_COMMENTS = gql`
  query($postId: ID!) {
    comments(where: { contentId: $postId }) {
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

  fragment CommentFields on Comment {
    id
    date
    approved
    content
    author {
      ...AuthorFields
    }
  }
  fragment AuthorFields on CommentAuthor {
    name
    url
  }
`

const CommentsList = ({ post }) => {
  const { postId } = post
  const [activeComment, setActiveComment] = useState(0)
  const cancelReply = () => {
    setActiveComment(0)
  }
  const addReply = id => {
    setActiveComment(id)
  }
  const { data, loading, error } = useQuery(GET_COMMENTS, {
    variables: { postId },
  })
  const { dynamicComments } = useThemeOptions()

  const comments = dynamicComments
    ? data && data.comments.nodes
    : post.comments.nodes

  if (loading)
    return (
      <>
        <span sx={{ color: 'text' }}>Comments are loading...</span>
        <Loader size={8} margin={5} />
      </>
    )
  if (error) return `Error loading comments...`
  return (
    <section>
      {comments.length > 0 ? (
        <section sx={commentStyles.section}>
          <h2 sx={commentStyles.title}>Comments</h2>
          <ul sx={commentStyles.list}>
            {comments.map(comment => (
              <Fragment key={comment.id}>
                <Comment
                  withReply={true}
                  postId={post.postId}
                  activeComment={activeComment}
                  comment={comment}
                  addReply={addReply}
                  cancelReply={cancelReply}
                ></Comment>
                {comment.children.nodes.length > 0 && (
                  <ul>
                    {comment.children.nodes.map(reply => (
                      <Fragment key={reply.id}>
                        <Comment
                          withReply={true}
                          postId={post.postId}
                          activeComment={activeComment}
                          comment={reply}
                          addReply={addReply}
                          cancelReply={cancelReply}
                        ></Comment>
                        {reply.children.nodes.length > 0 && (
                          <ul>
                            {reply.children.nodes.map(replyRe => (
                              <Comment
                                withReply={false}
                                key={replyRe.id}
                                comment={replyRe}
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
      {activeComment === 0 && <CommentForm postId={post.postId} />}
    </section>
  )
}

export default CommentsList
