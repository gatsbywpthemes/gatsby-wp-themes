import React from 'react'
import { Box, Heading, useColorModeValue as colorMode } from '@chakra-ui/react'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <div>
      <Box
        px={[4, 6]}
        py={3}
        mb={10}
        borderRadius="lg"
        display="inline-block"
        bg={colorMode('archiveTitleBg', 'modes.dark.archiveTitleBg')}
        className="archive-title"
        boxShadow="lg"
      >
        <Heading
          fontSize="xl"
          letterSpacing="wider"
          textTransform="uppercase"
          color={colorMode('archiveTitleColor', 'modes.dark.archiveTitleColor')}
        >
          {text} {name}
        </Heading>
      </Box>
    </div>
  )
}
