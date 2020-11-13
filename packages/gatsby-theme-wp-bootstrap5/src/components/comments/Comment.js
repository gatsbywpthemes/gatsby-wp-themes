import React from 'react'
import { Date } from '../post'
import { CommentForm } from './index'

const Reply = ({ commentId, actionOnClick }) => {
  return (
    <button
      type="button"
      onClick={() => actionOnClick(commentId)}
      className="btn btn-sm btn-dark comment-button-reply"
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
          <small>{name}</small>
        </a>
      ) : (
        <small className="comment-author">{name}</small>
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
    <li className="comment list-group-item mb-2 px-2">
      <Author name={comment.author.node.name} url={comment.author.node.url} />
      <br />
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
        <p className="comment-nesting-info mb-0">
          Only two levels of nesting is supported.
        </p>
      )}
    </li>
  )
}
