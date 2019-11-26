/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Date from '../post/Date'
import CommentForm from './CommentForm'

const Reply = ({ commentId, actionOnClick }) => {
  return (
    <button
      sx={{ variant: 'comments.replyButton' }}
      type="button"
      onClick={() => actionOnClick(commentId)}
      className="comment-button-reply"
    >
      Reply
    </button>
  )
}

const Author = ({ name, url }) => {
  return (
    <>
      {url ? (
        <a
          className="comment-author"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      ) : (
        <span className="comment-author">{name}</span>
      )}
    </>
  )
}

const Comment = props => {
  const {
    comment,
    activeComment,
    postId,
    withReply,
    addReply,
    cancelReply,
  } = props
  return (
    <li className="comment" sx={{ variant: 'comments.comment' }}>
      <Author name={comment.author.name} url={comment.author.url} />
      <Date date={comment.date} />
      <div dangerouslySetInnerHTML={{ __html: comment.content }} />
      {withReply ? (
        activeComment === comment.commentId ? (
          <CommentForm
            commentId={comment.commentId}
            postId={postId}
            cancelReply={cancelReply}
          />
        ) : (
          <Reply commentId={comment.commentId} actionOnClick={addReply} />
        )
      ) : (
        <p className="comment-nesting-info">
          Only two levels nesting is supported.
        </p>
      )}
    </li>
  )
}

export default Comment
