import React from "react"
import { FormControl, FormErrorMessage } from "@chakra-ui/react"
export const Error = ({ error }) => {
  if (error) {
    let errorMessage = ""
    switch (error.type) {
      case "required":
        errorMessage = error.message || "Required"
        break
      case "filesize":
        errorMessage = error.message || "Invalid filesize"
        break
      case "accept":
        errorMessage = error.message || "Invalid file type"
        break
      default:
        errorMessage = error.message || "Invalid value"
        break
    }
    return (
      <FormControl isInvalid={error}>
        <FormErrorMessage
          fontStyle="italic"
          mt="0"
          letterSpacing="normal"
          textTransform="none"
        >
          {errorMessage}
        </FormErrorMessage>
      </FormControl>
    )
  } else {
    return null
  }
}
