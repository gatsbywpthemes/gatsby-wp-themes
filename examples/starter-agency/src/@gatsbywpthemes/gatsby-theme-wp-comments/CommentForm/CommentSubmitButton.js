import React from "react"

export const CommentSubmitButton = ({ commentStatus }) => {
  return (
    <div className="w-full">
      <button
        className="flex ml-auto bg-black submit-button btn hover:bg-highlight"
        type="submit"
        disabled={commentStatus === "loading"}
      >
        Post Comment
      </button>
    </div>
  )
}
