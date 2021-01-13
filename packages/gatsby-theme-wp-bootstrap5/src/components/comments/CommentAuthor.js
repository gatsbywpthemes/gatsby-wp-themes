import React from 'react'

export const CommentAuthor = ({ name, url }) => {
  return url ? (
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
  )
}
