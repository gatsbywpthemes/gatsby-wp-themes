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
import { CommentsListContext } from './context'

export const Comment = ({ comment, withReply }) => {
  const { postId, activeComment } = useContext(CommentsListContext)
  return (
    <Box as="li" className="comment" layerStyle="overlay" p="4">
      <CommentAuthor
        name={comment.author.node.name}
        url={comment.author.node.url}
      />
      <Box fontStyle="italic" fontSize="xs">
        <Date date={comment.date} />
      </Box>
      <CommentContent content={comment.content} />
      {withReply ? (
        activeComment === comment.commentId ? (
          <CommentForm commentId={comment.commentId} postId={postId} />
        ) : (
          <ReplyButton commentId={comment.commentId} />
        )
      ) : (
        <CommentNestingInfo />
      )}
    </Box>
  )
}
