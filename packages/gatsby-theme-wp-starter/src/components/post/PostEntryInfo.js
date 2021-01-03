import { Box, useColorModeValue as colorMode } from '@chakra-ui/react'
import React from 'react'
import { Date, Author } from 'starterComponents'

export const PostEntryInfo = ({ post, ...props }) => {
  return (
    <Box
      display="inline-block"
      fontStyle="italic"
      borderRadius="md"
      fontSize="sm"
      px={4}
      py={2}
      bg={colorMode('infoBg', 'modes.dark.infoBg')}
      mb={10}
      {...props}
    >
      <span>Posted on:</span> <Date date={post.date} /> by{' '}
      <Author post={post} />
    </Box>
  )
}
