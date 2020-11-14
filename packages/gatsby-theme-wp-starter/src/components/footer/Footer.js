import React from 'react'
import { Box, useColorModeValue as colorMode } from '@chakra-ui/react'
import { Container } from 'starterUiComponents'

import { FooterContent } from 'starterComponents'
import { SocialFollows } from 'starterComponents'

export const Footer = () => (
  <Box as="footer" py={7} boxShadow="md" bg={colorMode('white', 'ultraDark')}>
    <Container>
      <FooterContent mb={4} />
      <SocialFollows />
    </Container>
  </Box>
)
