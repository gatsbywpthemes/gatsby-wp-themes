import React, { forwardRef } from 'react'
import { Textarea as ChakraTextarea } from '@chakra-ui/react'

export const Textarea = forwardRef(({ ...props }, ref) => {
  return <ChakraTextarea layerStyle="input" {...props} ref={ref} />
})
