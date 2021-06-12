import React, { useContext, memo } from 'react'
import {
  Date,
  CommentForm,
  CommentContent,
  CommentAuthor,
  ReplyButton,
  CommentNestingInfo,
} from 'gingerThemeComponents'
import { Box } from '@chakra-ui/react'
import { SetActiveCommentContext } from 'gingerThemeComponents/comments/context'

export const Comment = memo(
  ({ comment, withReply, activeComment }) => {
    const { author, date, content, commentId } = comment
    const setActiveComment = useContext(SetActiveCommentContext)
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
            <ReplyButton onClick={() => setActiveComment(commentId)} />
          )
        ) : (
          <CommentNestingInfo />
        )}
      </Box>
    )
  },
  (prev, next) =>
    (prev.activeComment === prev.comment.commentId &&
      next.activeComment === next.comment.commentId) ||
    (prev.activeComment !== prev.comment.commentId &&
      next.activeComment !== next.comment.commentId)
)
