import React, { useContext } from 'react'
import {
  Date,
  CommentForm,
  CommentContent,
  CommentAuthor,
  ReplyButton,
  CommentNestingInfo,
} from 'starterComponents'
import { Box, useColorModeValue as colorMode } from '@chakra-ui/react'
import { CommentsListContext } from 'starterComponents/comments/context'

export const Comment = ({ comment, withReply }) => {
  const { author, date, content, commentId } = comment
  const { activeComment, addReply } = useContext(CommentsListContext)
  return (
    <Box
      as="li"
      className="comment"
      bg={colorMode('cardBg', 'modes.dark.cardBg')}
      p="4"
      shadow="lg"
      borderRadius="md"
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