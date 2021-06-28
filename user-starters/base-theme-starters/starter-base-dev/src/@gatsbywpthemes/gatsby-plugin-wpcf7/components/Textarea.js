import React, { forwardRef } from 'react'
import { Input as ChakraTextarea } from 'baseUiComponents'

export const Textarea = forwardRef(({ ...props }, ref) => {
  return <ChakraTextarea as="textarea" height="auto" {...props} ref={ref} />
})
