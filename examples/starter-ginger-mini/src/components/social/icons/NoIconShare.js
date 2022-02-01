import React from 'react'
import { Box } from '@chakra-ui/react'

export const NoIconShare = ({ as, children, ...props }) => {
  return (
    <Box as={as} textStyle="specialLinkUnderline" {...props}>
      {children}
    </Box>
  )
}
