import React from 'react'
import { Input as ChakraInput } from '@chakra-ui/react'

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <ChakraInput
      layerStyle="input"
      className={`${className}`}
      {...props}
      sx={{
        '&[type="file"]': {
          mb: 4,
          py: 3,
        },
        '&[type="radio"]': {
          ml: 1,
        },
        '&[type="checkbox"]': {
          mr: 1,
          my: 3,
        },
        '&[type="number"]': {
          width: 'auto',
          minWidth: 0,
        },
      }}
      ref={ref}
    />
  )
})
