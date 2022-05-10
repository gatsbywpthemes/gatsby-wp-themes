import React from "react"

export const CommentSubmitButton = ({ commentStatus }) => {
  return (
    <div className="w-full">
      <button
        className="flex ml-auto px-4 py-1 transition duration-300 ease-in-out btn-ghost hover:bg-white hover:!text-dark-bg text-white border-white"
        type="submit"
        disabled={commentStatus === "loading"}
      >
        Post Comment
      </button>
    </div>
  )
}
