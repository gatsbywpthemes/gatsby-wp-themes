import React from 'react'
import { ParsedContent, ActivatePostScripts } from 'gingerThemeUtils'
import { Box } from '@chakra-ui/react'

export const PostEntryContent = ({ content }) => {
  return (
    <Box mb="8">
      <ActivatePostScripts />
      <ParsedContent content={content} />
    </Box>
  )
}
