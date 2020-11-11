/** @jsx jsx */
import { Box, jsx, useColorModeValue as colorMode } from '@chakra-ui/core'
import { Container } from 'starterUiComponents'

import { FooterContent } from 'starterComponents'
import { SocialFollows } from 'starterComponents'

export const Footer = () => (
  <Box as="footer" py={7} bg={colorMode('gray.800', 'gray.900')}>
    <Container>
      <FooterContent mb={4} />
      <SocialFollows color="light" />
    </Container>
  </Box>
)
