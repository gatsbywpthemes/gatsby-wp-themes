import React from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { CommentsList, DisqusComments } from 'starterComponents'
import { Box, Container } from '@chakra-ui/react'
import { useCommentsList } from 'starterComponents/comments/hooks/useCommentsList'
import { CommentsListContext } from 'starterComponents/comments/context'

export const Comments = ({ post }) => {
  const { addWordPressComments, disqus } = useThemeOptions()
  const commentsFromQuery = useCommentsList(post)

  return (
    <>
      {!!addWordPressComments && post.commentStatus === 'open' && (
        <Box as="section">
          <Container maxWidth="60rem">
            <CommentsListContext.Provider value={{ ...commentsFromQuery }}>
              <CommentsList />
            </CommentsListContext.Provider>
          </Container>
        </Box>
      )}
      {!!disqus && <DisqusComments disqus={disqus} post={post} />}
    </>
  )
}
