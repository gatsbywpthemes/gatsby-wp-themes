import React from "react"

export const CommentSubmitButton = ({ commentStatus }) => {
  return (
    <button
      className="submit-button"
      type="submit"
      disabled={commentStatus === "loading"}
    >
      Post Comment
    </button>
  )
}
