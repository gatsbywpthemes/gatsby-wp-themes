import React, { useContext } from 'react'
import {
  Date,
  CommentForm,
  CommentContent,
  CommentAuthor,
  ReplyButton,
  CommentNestingInfo,
} from 'baseComponents'
import { Box, useColorModeValue as colorMode } from '@chakra-ui/react'
import { CommentsListContext } from 'baseComponents/comments/context'

export const Comment = ({ comment, withReply }) => {
  const { author, date, content, commentId } = comment
  const { activeComment, addReply } = useContext(CommentsListContext)
  return (
    <Box
      className="comment"
      bg={colorMode('cardBg', 'modes.dark.cardBg')}
      p="4"
      shadow="lg"
      borderRadius="md"
      mb={6}
    >
      <CommentAuthor name={author.node.name} url={author.node.url} />
      <Box fontStyle="italic" fontSize="xs">
        <Date date={date} />
      </Box>
      <CommentContent content={content} />
      {withReply ? (
        activeComment === comment.commentId ? (
          <CommentForm />
        ) : (
          <ReplyButton onClick={() => addReply(commentId)} />
        )
      ) : (
        <CommentNestingInfo />
      )}
    </Box>
  )
}
