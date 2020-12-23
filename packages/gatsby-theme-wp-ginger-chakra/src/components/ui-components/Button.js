import React, { forwardRef } from 'react'
import { useStyleConfig, Button as ChakraButton } from '@chakra-ui/react'

export const Button = forwardRef(({ variant, sx, ...rest }, ref) => {
  const styles = useStyleConfig('Button', { variant })
  const customStyles = sx
  return (
    <ChakraButton ref={ref} sx={{ ...styles, ...customStyles }} {...rest} />
  )
})
