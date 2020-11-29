import React from 'react'
import { Box } from '@chakra-ui/react'

export const CommentContent = ({ content }) => {
  return (
    <Box
      className="comment-content"
      dangerouslySetInnerHTML={{ __html: content }}
      sx={{
        a: {
          textDecoration: 'underline',
        },
      }}
    />
  )
}
