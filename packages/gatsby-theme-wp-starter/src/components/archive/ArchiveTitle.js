import React from 'react'
import { Box, Heading, useColorModeValue as colorMode } from '@chakra-ui/react'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <Box
      px={[4, 6]}
      py={1}
      mb={10}
      borderRadius="lg"
      display="inline-block"
      bg={colorMode('archiveTitleBg', 'modes.dark.archiveTitleBg')}
      className="archive-title"
      boxShadow="lg"
    >
      <Heading fontSize="xl" letterSpacing="wider" textTransform="uppercase">
        {text} {name}
      </Heading>
    </Box>
  )
}
