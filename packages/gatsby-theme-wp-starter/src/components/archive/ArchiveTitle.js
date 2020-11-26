import React from 'react'
import { Box, Heading, useColorModeValue as colorMode } from '@chakra-ui/react'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <Box
      px={[4, 10]}
      py={2}
      mb={10}
      // borderRadius="lg"
      display="inline-block"
      bg={colorMode('black', 'primary')}
      color="white"
      className="archive-title"
      boxShadow="md"
    >
      <Heading fontSize="xl" letterSpacing="wider" textTransform="uppercase">
        {text} {name}
      </Heading>
    </Box>
  )
}
