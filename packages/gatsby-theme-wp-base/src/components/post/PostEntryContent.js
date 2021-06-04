import React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import ParsedContent from 'baseUtils/ParsedContent'
import { gutenbergStyles, entryContentStyles } from 'baseStyles'

import { ActivatePostScripts } from 'baseUtils'

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const attributes = location === 'single' ? { id: 'content' } : {}
  const { colorMode } = useColorMode()
  return (
    <Box {...attributes} {...props} sx={{ ...gutenbergStyles, ...entryContentStyles({colorMode}) }}>
      <Box className="entry-content">
        <ActivatePostScripts />
        <ParsedContent content={content} />
      </Box>
    </Box>
  )
}
