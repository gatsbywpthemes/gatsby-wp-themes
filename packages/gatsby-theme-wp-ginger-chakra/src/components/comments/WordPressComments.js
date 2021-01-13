import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { useCommentsList } from 'gingerThemeComponents/comments/hooks/useCommentsList'
import { CommentsListContext } from 'gingerThemeComponents/comments/context'
import { CommentsList } from 'gingerThemeComponents'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'

export const WordPressComments = ({ post }) => {
  const commentsFromQuery = useCommentsList(post)
  return (
    <Box
      as="section"
      bg={useThemeColorModeValue('commentsBg')}
      color={useThemeColorModeValue('commentsColor')}
      py={['6', '16']}
    >
      <Container sx={{ maxWidth: (theme) => theme.sizes.content }}>
        <CommentsListContext.Provider value={{ ...commentsFromQuery }}>
          <CommentsList />
        </CommentsListContext.Provider>
      </Container>
    </Box>
  )
}
