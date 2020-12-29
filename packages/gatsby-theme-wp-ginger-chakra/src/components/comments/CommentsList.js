import React, { Fragment, useContext } from 'react'
import { Box, chakra } from '@chakra-ui/react'
import { CommentForm, Comment } from 'gingerThemeComponents'
import { CommentsListContext } from './context'

export const CommentsList = ({ post, reloading }) => {
  const { comments, loading, error, activeComment } = useContext(
    CommentsListContext
  )
  if (loading) return <p>Loading comments&hellip;</p>
  if (error) return <p>Some errors occur.</p>
  return (
    <>
      {comments.nodes.length > 0 ? (
        <section>
          <Box as="h2" textAlign="center">
            Comments
          </Box>
          <chakra.ul
            mb="12"
            sx={{ ul: { ml: '6' }, li: { listStyle: 'none', mb: '6' } }}
          >
            {comments.nodes
              .filter((el) => el.parent === null)
              .map((comment) => (
                <Fragment key={comment.id}>
                  <Comment withReply={true} comment={comment}></Comment>
                  {comment.replies.nodes.length > 0 && (
                    <ul>
                      {comment.replies.nodes.map((reply) => (
                        <Fragment key={reply.id}>
                          <Comment withReply={true} comment={reply}></Comment>
                          {reply.replies.nodes.length > 0 && (
                            <ul>
                              {reply.replies.nodes.map((replyRe) => (
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
          </chakra.ul>
        </section>
      ) : (
        <p>No comments yet</p>
      )}
      {activeComment === 0 && <CommentForm />}
    </>
  )
}
