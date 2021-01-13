import React, { Fragment, useContext } from 'react'
import { CommentForm, Comment } from 'bootstrap5ThemeComponents'
import { CommentsListContext } from 'bootstrap5ThemeComponents/comments/context'

export const CommentsList = () => {
  const { comments, loading, error, activeComment } = useContext(
    CommentsListContext
  )
  if (loading) return <p>Loading comments&hellip;</p>
  if (error) return <p>Some errors occur.</p>

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
                  <Comment withReply={true} comment={comment}></Comment>
                  {comment.replies.nodes.length > 0 && (
                    <ul>
                      {comment.replies.nodes.map((reply) => (
                        <Fragment key={reply.id}>
                          <Comment withReply={true} comment={reply}></Comment>
                          {reply.replies.nodes.length > 0 && (
                            <ul>
                              {reply.replies.nodes.map((replyRe) => (
                                <Comment key={replyRe.id} comment={replyRe} />
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
      {activeComment === 0 && <CommentForm />}
    </Fragment>
  )
}
