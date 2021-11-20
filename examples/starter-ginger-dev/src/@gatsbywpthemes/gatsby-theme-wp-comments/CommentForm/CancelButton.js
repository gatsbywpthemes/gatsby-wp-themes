import React from 'react'
import { Button } from '@chakra-ui/button'

export const CancelButton = (props) => {
  return (
    <Button
      variant="link"
      display="flex"
      ml="auto"
      color="inherit"
      className="comment-button-cancel"
      onClick={props.onClick}
    >
      <span>Cancel</span>
    </Button>
  )
}
