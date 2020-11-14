import { Box, useColorModeValue as colorMode } from '@chakra-ui/react'
import React from 'react'
import { Date, Author } from 'starterComponents'

export const PostEntryInfo = ({ post, ...props }) => {
  return (
    <Box
      layerStyle="info"
      bg={colorMode('light', 'primary')}
      mb={10}
      {...props}
    >
      <span>Posted on:</span> <Date post={post} /> by{' '}
      <Author color={colorMode('accentLight', 'accentDark')} post={post} />
    </Box>
  )
}
