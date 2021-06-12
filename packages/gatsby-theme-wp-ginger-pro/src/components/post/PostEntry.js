import React from 'react'
import { PostEntryIntroBlog, PostEntryMedia } from 'gingerThemeComponents'
import { Box } from '@chakra-ui/react'

export const PostEntry = ({ isFirst = false, post }) => {
  return (
    <Box
      as="article"
      className="entry"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
      transform="translateY(2rem)"
    >
      <PostEntryMedia post={post} imageLoading={isFirst ? 'eager' : 'lazy'} />
      <PostEntryIntroBlog post={post} />
    </Box>
  )
}
