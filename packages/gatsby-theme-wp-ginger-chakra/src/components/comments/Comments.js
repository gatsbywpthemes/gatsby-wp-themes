import React from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { CommentsList, DisqusComments } from './index'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import useCommentsList from 'gingerThemeComponents/comments/hooks/useCommentsList'
import { CommentsListContext } from 'gingerThemeComponents/comments/context'

export const Comments = ({ post }) => {
  const { addWordPressComments, disqus } = useThemeOptions()
  const bg = useColorModeValue('commentsBg', 'modes.dark.commentsBg')
  const color = useColorModeValue('commentsColor', 'modes.dark.commentsColor')
  const commentsFromQuery = useCommentsList(post)
  return (
    <>
      {!!addWordPressComments && post.commentStatus === 'open' && (
        <Box as="section" bg={bg} color={color} py={['6', '16']}>
          <Container maxWidth="60rem">
            <CommentsListContext.Provider value={{ ...commentsFromQuery }}>
              <CommentsList post={post} />
            </CommentsListContext.Provider>
          </Container>
        </Box>
      )}
      {!!disqus && <DisqusComments disqus={disqus} post={post} />}
    </>
  )
}
