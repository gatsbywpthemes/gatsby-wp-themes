import React from 'react'
import { useStyleConfig, Box } from '@chakra-ui/react'

export const Container = ({ size, sx, ...rest }) => {
  const styles = useStyleConfig('CenterContainer', { size })
  const customStyles = sx
  return <Box sx={{ ...styles, ...customStyles }} {...rest} />
}
