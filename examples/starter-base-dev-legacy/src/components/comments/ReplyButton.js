import React from "react"
import { Button, useColorModeValue } from "@chakra-ui/react"

export const ReplyButton = (props) => {
  return (
    <Button
      variant="link"
      textStyle="link"
      display="flex"
      ml="auto"
      color="inherit"
      type="button"
      className="comment-button-reply"
      _hover={{
        color: useColorModeValue("accent", "modes.dark.accent"),
      }}
      {...props}
    >
      <span>Reply</span>
    </Button>
  )
}
