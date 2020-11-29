import React from 'react'
import { Box } from '@chakra-ui/react'

export const Label = ({ className, children, ...props }) => {
  return (
    <Box
      as="label"
      textStyle="special"
      className={className}
      {...props}
      sx={{
        '.form-field-radio &': {
          py: 1,
          display: 'inline-block',
          mr: 3,
        },
      }}
    >
      {children}
    </Box>
  )
}
