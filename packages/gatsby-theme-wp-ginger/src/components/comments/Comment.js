/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Date } from '../post'
import { CommentForm } from './index'
import { commentStyles, replyButtonStyles } from '../../styles/'

const Reply = ({ commentId, actionOnClick }) => {
  return (
    <button
      sx={{ ...replyButtonStyles }}
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

export const Comment = (props) => {
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
      <Author name={comment.author.node.name} url={comment.author.node.url} />
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
