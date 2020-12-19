import React from 'react'
import { Box, Heading, useColorModeValue as colorMode } from '@chakra-ui/react'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <Box
      // px={[4, 6]}
      // py={3}
      // mb={10}
      // borderRadius="lg"
      // display="inline-block"
      // bg={colorMode('archiveTitleBg', 'modes.dark.archiveTitleBg')}
      // className="archive-title"
      // boxShadow="lg"
      className="inline-block px-8 py-3 mb-8 text-sm text-white bg-blue-300 shadow-xl rounded-xl"
    >
      <h2
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
        className="text-lg font-bold uppercase"
      >
        {text} {name}
      </h2>
    </Box>
  )
}
