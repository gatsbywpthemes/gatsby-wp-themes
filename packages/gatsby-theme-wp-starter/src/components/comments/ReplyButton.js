import React from 'react'
import { Button } from '@chakra-ui/react'

export const ReplyButton = ({ commentId, actionOnClick }) => {
  return (
    <Button
      variant="unstyled"
      display="flex"
      ml="auto"
      color="inherit"
      type="button"
      onClick={() => actionOnClick(commentId)}
      className="comment-button-reply"
      _hover={{ color: 'primary' }}
    >
      <span>Reply</span>
    </Button>
  )
}
