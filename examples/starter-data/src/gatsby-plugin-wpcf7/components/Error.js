import React from 'react'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
export const Error = ({ error }) => {
  return (
    <FormControl isInvalid={error}>
      <FormErrorMessage
        fontStyle="italic"
        mt="0"
        letterSpacing="normal"
        textTransform="none"
      >
        {error?.type === 'required' ? 'Required' : 'Invalid value'}
      </FormErrorMessage>
    </FormControl>
  )
}
