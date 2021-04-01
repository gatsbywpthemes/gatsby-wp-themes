import React, { useState } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { useCommentsList } from 'gingerThemeComponents/comments/hooks/useCommentsList'
import {
  CommentsListContext,
  ActiveCommentContext,
  SetActiveCommentContext,
} from 'gingerThemeComponents/comments/context'
import { CommentsList } from 'gingerThemeComponents'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'

const ActiveCommentProvider = ({ children }) => {
  const [activeComment, setActiveComment] = useState(0)
  /*const cancelReply = () => {
    setActiveComment(0)
  }
  const addReply = (id) => {
    setActiveComment(id)
  }*/
  return (
    <SetActiveCommentContext.Provider value={setActiveComment}>
      <ActiveCommentContext.Provider value={activeComment}>
        {children}
      </ActiveCommentContext.Provider>
    </SetActiveCommentContext.Provider>
  )
}

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
        <CommentsListContext.Provider value={commentsFromQuery}>
          <ActiveCommentProvider>
            <CommentsList />
          </ActiveCommentProvider>
        </CommentsListContext.Provider>
      </Container>
    </Box>
  )
}
