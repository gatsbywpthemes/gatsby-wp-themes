import React from 'react'
import { ParsedContent, ActivatePostScripts } from 'gingerThemeUtils'
import { Box, useColorMode } from '@chakra-ui/react'
import { entryContentStyles, gutenbergStyles } from 'gingerThemeStyles'

export const PostEntryContent = ({ content }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      className="entry-content"
      mb="8"
      sx={{
        ...entryContentStyles({ colorMode }),
      }}
    >
      <ActivatePostScripts />
      <ParsedContent content={content} />
    </Box>
  )
}
