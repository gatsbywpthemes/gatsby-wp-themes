import React from 'react'
import {
  useStyleConfig,
  Box,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'

// export const Card = ({ variant, sx, ...rest }) => {
//   const styles = useStyleConfig('Card', { variant })
//   const customStyles = sx
//   return <Box sx={{ ...styles, ...customStyles }} {...rest} />
// }

export const Card = (props) => {
  return (
    <Box
      borderRadius="lg"
      boxShadow="lg"
      p={[5, 12]}
      bg={colorMode('white', 'ultraDark')}
      {...props}
    />
  )
}
