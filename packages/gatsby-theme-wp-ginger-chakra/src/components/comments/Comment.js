import React from 'react'
import { Date } from '../post'
import {
  CommentForm,
  CommentContent,
  CommentAuthor,
  ReplyButton,
  CommentNestingInfo,
} from './index'
import { Box } from '@chakra-ui/react'

export const Comment = (props) => {
  const {
    comment,
    activeComment,
    postId,
    withReply,
    addReply,
    cancelReply,
    doOnCompleted,
  } = props
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
          <CommentForm
            commentId={comment.commentId}
            postId={postId}
            cancelReply={cancelReply}
            doOnCompleted={doOnCompleted}
          />
        ) : (
          <ReplyButton commentId={comment.commentId} actionOnClick={addReply} />
        )
      ) : (
        <CommentNestingInfo />
      )}
    </Box>
  )
}
