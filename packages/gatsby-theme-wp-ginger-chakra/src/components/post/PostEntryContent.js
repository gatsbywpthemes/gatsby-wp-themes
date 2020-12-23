import React from 'react'
import ParsedContent from '../../utils/ParsedContent'
import { ActivatePostScripts } from '../../utils/'
import { Box, useColorMode } from '@chakra-ui/react'

export const PostEntryContent = ({ content, location = 'archive' }) => {
  const { colorMode } = useColorMode()
  return (
    location === 'single' && (
      <Box
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="entry-content"
      >
        <Box
          mb="8"
          sx={{
            '.has-background:not(.has-text-color),.wp-block-media-text[style*="background"],.wp-block-table.is-style-stripes tbody tr:nth-of-type(odd)': {
              backgroundImage: (theme) => {
                return colorMode === 'dark'
                  ? `linear-gradient(${theme.colors.modes.dark.overlay}, ${theme.colors.modes.dark.overlay})`
                  : `linear-gradient(${theme.colors.overlay}, ${theme.colors.overlay})`
              },
              backgroundBlendMode: 'multiply',
            },
          }}
        >
          <ActivatePostScripts />
          <ParsedContent content={content} />
        </Box>
      </Box>
    )
  )
}
