import React from 'react'

export const CommentSubmitButton = ({ commentStatus }) => {
  return (
    <button
      className="btn btn-dark text-uppercase"
      type="submit"
      disabled={commentStatus === 'loading'}
    >
      Post Comment
    </button>
  )
}
