import React from 'react'
import { Box } from '@chakra-ui/react'

export const Label = ({ className, children, ...props }) => {
  return (
    <Box
      as="label"
      textStyle="special"
      letterSpacing="normal"
      className={className}
      sx={{
        '.form-field-checkbox &, .form-field-radio &': {
          d: 'flex',
          alignItems: 'center',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
