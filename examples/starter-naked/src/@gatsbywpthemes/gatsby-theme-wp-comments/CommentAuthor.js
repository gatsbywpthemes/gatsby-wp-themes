import React from "react"

export const CommentAuthor = ({ name, url }) => {
  return url ? (
    <a
      className="comment-author"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  ) : (
    <span>{name}</span>
  )
}
