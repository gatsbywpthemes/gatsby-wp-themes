import React from 'react'

export const CommentStatusFeedback = ({ commentStatus }) => {
  switch (commentStatus) {
    case 'success':
      return (
        <p>
          Your comment has been successfully submitted. If it does not appear in
          a few seconds, it means that it is awaiting moderation.
        </p>
      )
    case 'loading':
      return <p>Please wait. Your comment is being submitted.</p>
    case 'error':
      return (
        <p>There was an error in your submission. Please try again later.</p>
      )
    default:
      return ''
  }
}
