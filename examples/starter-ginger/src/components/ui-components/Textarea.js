import React, { forwardRef } from 'react'
import { useStyleConfig, Textarea as ChakraTextarea } from '@chakra-ui/react'

export const Textarea = forwardRef(({ variant, sx, ...rest }, ref) => {
  const styles = useStyleConfig('Textarea')
  const customStyles = sx
  return (
    <ChakraTextarea ref={ref} sx={{ ...styles, ...customStyles }} {...rest} />
  )
})
