import React from 'react'

export const ReplyButton = (props) => {
  return (
    <button
      type="button"
      className="btn btn-sm btn-dark comment-button-reply"
      {...props}
    >
      Reply
    </button>
  )
}
