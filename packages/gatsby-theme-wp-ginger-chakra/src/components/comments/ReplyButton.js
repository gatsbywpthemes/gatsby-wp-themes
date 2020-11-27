import React from 'react'
import { Button } from '@chakra-ui/react'

export const ReplyButton = ({ commentId, actionOnClick }) => {
  return (
    <Button
      variant="link"
      display="flex"
      ml="auto"
      color="inherit"
      type="button"
      onClick={() => actionOnClick(commentId)}
      className="comment-button-reply"
    >
      <span>Reply</span>
    </Button>
  )
}
