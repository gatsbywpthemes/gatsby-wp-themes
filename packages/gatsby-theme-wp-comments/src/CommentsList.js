import React, { useContext } from "react"
import { CommentsListContext, ActiveCommentContext } from "./context"
import { CommentForm } from "./CommentForm"
import { Comment } from "./Comment"
import { CommentsListContainer } from "./CommentsListContainer"

export const CommentsList = () => {
  const { comments, loading, error } = useContext(CommentsListContext)
  const activeComment = useContext(ActiveCommentContext)
  if (loading) return <p>Loading comments&hellip;</p>
  if (error) return <p>Some errors occur.</p>
  return (
    <>
      {comments.nodes.length > 0 ? (
        <CommentsListContainer>
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
                              <li key={replyRe.id}>
                                <Comment
                                  activeComment={activeComment}
                                  withReply={false}
                                  comment={replyRe}
                                />
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </CommentsListContainer>
      ) : (
        <p>No comments yet</p>
      )}
      {activeComment === 0 && <CommentForm />}
    </>
  )
}
