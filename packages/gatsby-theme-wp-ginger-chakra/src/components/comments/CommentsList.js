import React, { useContext } from 'react'
import { Box, chakra } from '@chakra-ui/react'
import { CommentForm, Comment } from 'gingerThemeComponents'
import {
  CommentsListContext,
  ActiveCommentContext,
} from 'gingerThemeComponents/comments/context'

export const CommentsList = () => {
  const { comments, loading, error } = useContext(CommentsListContext)
  const activeComment = useContext(ActiveCommentContext)
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
                <li key={comment.id}>
                  <Comment
                    activeComment={activeComment}
                    withReply={true}
                    comment={comment}
                  ></Comment>
                  {comment.replies.nodes.length > 0 && (
                    <ul>
                      {comment.replies.nodes.map((reply) => (
                        <li key={reply.id}>
                          <Comment
                            activeComment={activeComment}
                            withReply={true}
                            comment={reply}
                          ></Comment>
                          {reply.replies.nodes.length > 0 && (
                            <ul>
                              {reply.replies.nodes.map((replyRe) => (
                                <Box as="li" key={replyRe.id}>
                                  <Comment
                                    activeComment={activeComment}
                                    withReply={false}
                                    comment={replyRe}
                                  />
                                </Box>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
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
