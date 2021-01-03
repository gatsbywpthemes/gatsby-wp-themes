import React from 'react'
import { Button } from '@chakra-ui/react'

export const ReplyButton = (props) => {
  return (
    <Button
      variant="link"
      display="flex"
      ml="auto"
      color="inherit"
      className="comment-button-reply"
      {...props}
    >
      Reply
    </Button>
  )
}
