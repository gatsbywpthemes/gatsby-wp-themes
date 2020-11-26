import React from 'react'
import { useStyleConfig, Box } from '@chakra-ui/react'

export const Card = ({ variant, sx, ...rest }) => {
  const styles = useStyleConfig('Card', { variant })
  const customStyles = sx
  return <Box sx={{ ...styles, ...customStyles }} {...rest} />
}
