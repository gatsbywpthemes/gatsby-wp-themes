import React from 'react'
import { Box, chakra } from '@chakra-ui/react'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <Box as="h1" textStyle="h1Archive">
      <Box textStyle="special" fontWeight="normal">
        {text}
      </Box>
      <chakra.span>{name}</chakra.span>
    </Box>
  )
}
