import React, { useContext } from "react"
import {
  Date,
  CommentForm,
  CommentContent,
  CommentAuthor,
  ReplyButton,
  CommentNestingInfo,
} from "baseComponents"

import { CommentsListContext } from "baseComponents/comments/context"
import clsx from "clsx"

export const Comment = ({ comment, withReply }) => {
  const { author, date, content, commentId } = comment
  const { activeComment, addReply } = useContext(CommentsListContext)
  return (
    <div
      className={clsx(
        "comment",
        "bg-cardBg dark:bg-dark-cardBg",
        "p4 mb-6",
        "rounded-md",
        "shadow-lg"
      )}
    >
      <CommentAuthor name={author.node.name} url={author.node.url} />
      <div className="text-xs italic">
        <Date date={date} />
      </div>
      <CommentContent content={content} />
      {withReply ? (
        activeComment === comment.commentId ? (
          <CommentForm />
        ) : (
          <ReplyButton onClick={() => addReply(commentId)} />
        )
      ) : (
        <CommentNestingInfo />
      )}
    </div>
  )
}
