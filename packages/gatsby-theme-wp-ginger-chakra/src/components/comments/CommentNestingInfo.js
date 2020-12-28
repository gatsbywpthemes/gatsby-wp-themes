import React from 'react'
import { Box } from '@chakra-ui/react'

export const CommentNestingInfo = () => {
  return (
    <Box as="p" fontSize="xs" textAlign="right" mb="0" opacity="0.6">
      Only two levels of nesting is supported.
    </Box>
  )
}
