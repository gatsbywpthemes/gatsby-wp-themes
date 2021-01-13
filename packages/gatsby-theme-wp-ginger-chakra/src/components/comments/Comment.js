import React, { useContext } from 'react'
import {
  Date,
  CommentForm,
  CommentContent,
  CommentAuthor,
  ReplyButton,
  CommentNestingInfo,
} from 'gingerThemeComponents'
import { Box } from '@chakra-ui/react'
import { CommentsListContext } from 'gingerThemeComponents/comments/context'

export const Comment = ({ comment, withReply }) => {
  const { author, date, content, commentId } = comment
  const { activeComment, addReply } = useContext(CommentsListContext)
  return (
    <Box className="comment" layerStyle="overlay" p="4" mb={6}>
      <CommentAuthor name={author.node.name} url={author.node.url} />
      <Box fontStyle="italic" fontSize="xs">
        <Date date={date} />
      </Box>
      <CommentContent content={content} />
      {withReply ? (
        activeComment === commentId ? (
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
