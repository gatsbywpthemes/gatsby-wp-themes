import React from 'react'
import { Box } from '@chakra-ui/react'

export const PostEntryExcerpt = ({ post, location }) => {
  return (
    location === 'archive' &&
    post.excerpt && (
      <Box
        className="entry-excerpt"
        letterSpacing="wide"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    )
  )
}
