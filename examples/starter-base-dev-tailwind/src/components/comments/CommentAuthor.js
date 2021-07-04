import React from "react"
import { TextSpecial } from "baseUiComponents"

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
    <TextSpecial as="span">{name}</TextSpecial>
  )
}
