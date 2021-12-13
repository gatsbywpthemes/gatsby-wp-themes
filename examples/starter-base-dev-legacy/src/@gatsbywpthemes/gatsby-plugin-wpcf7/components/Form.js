import React from "react"
import { Box, useColorModeValue } from "@chakra-ui/react"

export const Form = ({ children, ...props }) => {
  return (
    <Box
      as="form"
      className="contact-form"
      {...props}
      boxShadow={useColorModeValue(
        "0 10px 40px rgba(0,0,0,.15)",
        "0 20px 40px rgba(0,0,0,.4)"
      )}
      mb="8"
      py="12"
      px="8"
    >
      {children}
    </Box>
  )
}
