import React from "react"
import { FormControl } from "@chakra-ui/react"

export const FormField = ({ className, children }) => {
  return (
    <FormControl maxWidth="30rem" mb="4" mx="auto" className={className}>
      {children}
    </FormControl>
  )
}
