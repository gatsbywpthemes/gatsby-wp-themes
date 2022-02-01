import React from 'react'
import { Box } from '@chakra-ui/layout'

export const CommentContainer = ({ children }) => {
  return (
    <Box
      className="comment"
      layerStyle="overlay"
      p="4"
      mb={6}
      sx={{
        '.comment-content a': {
          textDecoration: 'underline',
        },
      }}
    >
      {children}
    </Box>
  )
}
