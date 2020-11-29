import React from 'react'
import ParsedContent from '../../utils/ParsedContent'
import { ActivatePostScripts } from '../../utils/'
import { Box } from '@chakra-ui/react'

export const PostEntryContent = ({ content, location = 'archive' }) => {
  return (
    <>
      {location === 'single' && (
        <Box
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="entry-content"
          mb="8"
        >
          <ActivatePostScripts />
          <ParsedContent content={content} />
        </Box>
      )}
    </>
  )
}
