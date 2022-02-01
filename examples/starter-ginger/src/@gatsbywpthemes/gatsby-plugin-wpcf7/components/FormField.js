import React from 'react'
import { FormControl } from '@chakra-ui/react'

export const FormField = ({ className, children }) => {
  return (
    <FormControl maxWidth="60ch" mx="auto" mb="6" className={className}>
      {children}
    </FormControl>
  )
}
