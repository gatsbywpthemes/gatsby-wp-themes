/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Date from '../post/Date'
import CommentForm from './CommentForm'
import { comment as commentStyles, replyButton } from '../../styles/comments'

const Reply = ({ commentId, actionOnClick }) => {
  return (
    <button
      sx={{ ...replyButton }}
      type="button"
      onClick={() => actionOnClick(commentId)}
      className="comment-button-reply"
    >
      <span>Reply</span>
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
    doOnCompleted,
  } = props
  return (
    <li className="comment" sx={{ ...commentStyles }}>
      <Author name={comment.author.name} url={comment.author.url} />
      <Date date={comment.date} />
      <div
        className="comment-content"
        dangerouslySetInnerHTML={{ __html: comment.content }}
      />
      {withReply ? (
        activeComment === comment.commentId ? (
          <CommentForm
            commentId={comment.commentId}
            postId={postId}
            cancelReply={cancelReply}
            doOnCompleted={doOnCompleted}
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
