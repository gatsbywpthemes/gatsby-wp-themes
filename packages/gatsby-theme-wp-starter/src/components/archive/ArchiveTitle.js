/** @jsx jsx */
import {
  jsx,
  Box,
  Heading,
  useColorModeValue as colorMode,
} from '@chakra-ui/core'

export const ArchiveTitle = ({ name, text }) => {
  return (
    <Box
      px={[4, 10]}
      py={2}
      mb={10}
      borderRadius="lg"
      display="inline-block"
      bg={colorMode('gray.200', 'gray.900')}
      className="archive-title"
      boxShadow="md"
    >
      <Heading fontSize="2xl" textTransform="uppercase">
        {text} {name}
      </Heading>
    </Box>
  )
}
