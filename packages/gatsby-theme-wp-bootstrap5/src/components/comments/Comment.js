import React, { useContext } from 'react'
import {
  Date,
  CommentForm,
  CommentContent,
  CommentAuthor,
  ReplyButton,
  CommentNestingInfo,
} from 'bootstrap5ThemeComponents'
import { CommentsListContext } from 'bootstrap5ThemeComponents/comments/context'

export const Comment = ({ comment, withReply }) => {
  const { author, date, content, commentId } = comment
  const { activeComment, addReply } = useContext(CommentsListContext)
  return (
    <li className="comment list-group-item mb-2 px-2">
      <CommentAuthor name={author.node.name} url={author.node.url} />
      <br />
      <Date date={date} />
      <CommentContent content={content} />
      {withReply ? (
        activeComment === commentId ? (
          <CommentForm />
        ) : (
          <ReplyButton onClick={() => addReply(commentId)} />
        )
      ) : (
        <CommentNestingInfo />
      )}
    </li>
  )
}
