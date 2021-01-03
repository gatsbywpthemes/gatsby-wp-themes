import React from 'react'
import { Button } from '@chakra-ui/react'

export const ReplyButton = (props) => {
  return (
    <Button
      variant="link"
      textStyle="link"
      display="flex"
      ml="auto"
      color="inherit"
      type="button"
      className="comment-button-reply"
      _hover={{ color: 'primary' }}
      {...props}
    >
      <span>Reply</span>
    </Button>
  )
}
