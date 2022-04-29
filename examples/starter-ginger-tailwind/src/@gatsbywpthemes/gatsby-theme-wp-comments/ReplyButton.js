import React from "react"

export const ReplyButton = (props) => {
  return (
    <button
      className="flex ml-auto text-current comment-button-reply"
      {...props}
    >
      Reply
    </button>
  )
}
