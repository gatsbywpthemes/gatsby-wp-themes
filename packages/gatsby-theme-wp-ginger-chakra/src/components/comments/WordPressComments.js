import React from 'react'
import { CommentsList } from 'gingerThemeComponents'
import { Box, Container } from '@chakra-ui/react'
import { useCommentsList } from 'gingerThemeComponents/comments/hooks/useCommentsList'
import { CommentsListContext } from 'gingerThemeComponents/comments/context'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'

export const WordPressComments = ({ post }) => {
  const bg = useThemeColorModeValue('commentsBg')
  const color = useThemeColorModeValue('commentsColor')
  const commentsFromQuery = useCommentsList(post)
  return (
    <Box as="section" bg={bg} color={color} py={['6', '16']}>
      <Container maxWidth="60rem">
        <CommentsListContext.Provider value={{ ...commentsFromQuery }}>
          <CommentsList />
        </CommentsListContext.Provider>
      </Container>
    </Box>
  )
}
