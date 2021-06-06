import React from 'react'
import { Box } from '@chakra-ui/react'

export const CommentNotes = () => {
  return (
    <Box
      as="p"
      textStyle="special"
      textAlign="center"
      w="full"
      className="comment-notes"
    >
      <span id="email-notes">Your email address will not be published.</span>
      <br />
      Required fields are marked <span className="required">*</span>
    </Box>
  )
}
