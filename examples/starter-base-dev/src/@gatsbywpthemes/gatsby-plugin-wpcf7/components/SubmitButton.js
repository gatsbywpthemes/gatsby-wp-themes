import React from "react"
import { Button, Box } from "@chakra-ui/react"

export const SubmitButton = ({ disabled, children }) => {
  return (
    <Box maxWidth="30rem" mb="4" mx="auto">
      <Button
        d="flex"
        ml="auto"
        className="submit-button"
        type="submit"
        disabled={disabled}
      >
        {children}
      </Button>
    </Box>
  )
}
