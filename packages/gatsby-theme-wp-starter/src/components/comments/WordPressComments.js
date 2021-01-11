import React from 'react'
import { CommentsList } from 'starterComponents'
import { Box, Container } from '@chakra-ui/react'
import { useCommentsList } from 'starterComponents/comments/hooks/useCommentsList'
import { CommentsListContext } from 'starterComponents/comments/context'

export const WordPressComments = ({ post }) => {
  const commentsFromQuery = useCommentsList(post)
  return (
    <Box as="section">
      <Container maxWidth="60rem">
        <CommentsListContext.Provider value={{ ...commentsFromQuery }}>
          <CommentsList />
        </CommentsListContext.Provider>
      </Container>
    </Box>
  )
}
