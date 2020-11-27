import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { CommentsList } from './index'
import {
  useColorMode,
  Box,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'

export const Comments = ({ post }) => {
  // in order to reload disqus and apply correct text color when color mode changes

  const { addWordPressComments, disqus } = useThemeOptions()
  const disqusConfig = {
    shortname: disqus,
    config: {
      identifier: post.slug,
      title: post.title,
    },
  }
  const { colorMode } = useColorMode()
  console.log(colorMode)
  const bg = useColorModeValue('commentsBg', 'modes.dark.commentsBg')
  const color = useColorModeValue('commentsColor', 'modes.dark.commentsColor')
  return (
    <>
      {!!addWordPressComments && post.commentStatus === 'open' && (
        <Box as="section" bg={bg} color={color} py={['6', '16']}>
          <Container maxWidth="60rem">
            <CommentsList post={post} />
          </Container>
        </Box>
      )}
      {!!disqus && (
        <Box>
          <Container>
            <DiscussionEmbed colormode={colorMode} {...disqusConfig} />
          </Container>
        </Box>
      )}
    </>
  )
}
