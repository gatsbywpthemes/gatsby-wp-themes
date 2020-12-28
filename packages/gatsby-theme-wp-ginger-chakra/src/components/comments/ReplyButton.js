import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { CommentsListContext } from './context'

export const ReplyButton = ({ commentId }) => {
  const { addReply } = useContext(CommentsListContext)
  return (
    <Button
      variant="link"
      display="flex"
      ml="auto"
      color="inherit"
      onClick={() => addReply(commentId)}
      className="comment-button-reply"
    >
      <span>Reply</span>
    </Button>
  )
}
