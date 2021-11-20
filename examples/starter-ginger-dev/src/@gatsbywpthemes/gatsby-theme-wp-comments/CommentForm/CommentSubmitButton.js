import React from 'react'
import { Box, Button } from '@chakra-ui/react'

export const CommentSubmitButton = ({ commentStatus }) => {
  return (
    <Box w="full">
      <Button
        d="flex"
        ml="auto"
        className="submit-button"
        type="submit"
        disabled={commentStatus === 'loading'}
      >
        Post Comment
      </Button>
    </Box>
  )
}
