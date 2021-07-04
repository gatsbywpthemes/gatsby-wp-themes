import React from "react"

export const CommentContent = ({ content }) => {
  return (
    <div
      className="comment-content"
      dangerouslySetInnerHTML={{ __html: content }}
      css={{
        a: {
          textDecoration: "underline",
        },
      }}
    />
  )
}
