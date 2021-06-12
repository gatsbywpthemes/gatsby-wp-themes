import React, { forwardRef } from 'react'
import { Textarea as ChakraTextarea } from 'gingerThemeUiComponents/Textarea'

export const Textarea = forwardRef(({ ...props }, ref) => {
  return <ChakraTextarea {...props} ref={ref} />
})
