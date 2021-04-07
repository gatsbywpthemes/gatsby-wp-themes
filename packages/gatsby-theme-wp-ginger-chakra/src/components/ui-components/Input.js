import React, { forwardRef } from 'react'
import { useStyleConfig, Input as ChakraInput } from '@chakra-ui/react'

export const Input = forwardRef(({ variant, sx, ...rest }, ref) => {
  const styles = useStyleConfig('Input')
  const customStyles = sx
  return <ChakraInput ref={ref} sx={{ ...styles, ...customStyles }} {...rest} />
})
