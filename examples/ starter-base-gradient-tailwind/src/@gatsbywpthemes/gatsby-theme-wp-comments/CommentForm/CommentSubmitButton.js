import React from "react"

export const CommentSubmitButton = ({ commentStatus }) => {
  return (
    <div className="w-full">
      <button
        className="flex ml-auto submit-button btn dark:btn-primary btn-secondary"
        type="submit"
        disabled={commentStatus === "loading"}
      >
        Post Comment
      </button>
    </div>
  )
}
