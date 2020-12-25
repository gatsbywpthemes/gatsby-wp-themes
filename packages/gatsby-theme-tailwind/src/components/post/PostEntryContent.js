import React from 'react'
import { Box } from '@chakra-ui/react'
import ParsedContent from 'starterUtils/ParsedContent'
import { gutenbergStyles } from 'starterStyles/gutenbergStyles'

import { ActivatePostScripts } from 'starterUtils'

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const attributes = location === 'single' ? { id: 'content' } : {}
  return (
    <Box {...attributes} {...props} sx={{ ...gutenbergStyles }}>
      <Box className="entry-content">
        <ActivatePostScripts />
        <ParsedContent content={content} />
        <diV className="p-6 text-2xl font-black text-center text-pink-300 uppercase shadow-xl bg-modes-dark-subMenuBg rounded-2xl">
          test
        </diV>
        <Box bg="amber.400" className="p-4 mt-6 rounded-full">
          chakra test
        </Box>
      </Box>
    </Box>
  )
}
