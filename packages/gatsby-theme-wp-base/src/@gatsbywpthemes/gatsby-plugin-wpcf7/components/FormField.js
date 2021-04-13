import React from 'react'
import { FormControl } from '@chakra-ui/react'

export const FormField = ({ className, children }) => {
  return (
    <FormControl
      w={['100%', 'calc(50% - 1rem)']}
      sx={{
        '&.form-field-textarea, &:empty': {
          width: '100%',
        },
      }}
      mb="4"
      className={className}
    >
      {children}
    </FormControl>
  )
}
