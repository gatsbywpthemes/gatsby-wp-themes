import React, { useContext, memo } from "react"
import {
  Date,
  CommentForm,
  CommentContent,
  CommentAuthor,
  ReplyButton,
  CommentNestingInfo,
} from "./index"

import { SetActiveCommentContext } from "./context"

export const Comment = memo(
  ({ comment, withReply, activeComment }) => {
    const { author, date, content, commentId } = comment
    const setActiveComment = useContext(SetActiveCommentContext)
    return (
      <div className="comment">
        <CommentAuthor name={author.node.name} url={author.node.url} />
        <em>
          <Date date={date} />
        </em>
        <CommentContent content={content} />
        {withReply ? (
          activeComment === commentId ? (
            <CommentForm />
          ) : (
            <ReplyButton onClick={() => setActiveComment(commentId)} />
          )
        ) : (
          <CommentNestingInfo />
        )}
      </div>
    )
  },
  (prev, next) =>
    (prev.activeComment === prev.comment.commentId &&
      next.activeComment === next.comment.commentId) ||
    (prev.activeComment !== prev.comment.commentId &&
      next.activeComment !== next.comment.commentId)
)
