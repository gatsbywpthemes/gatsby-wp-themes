/** @jsx jsx */
import {
  Box,
  jsx,
  DarkMode,
  useColorModeValue as colorMode,
} from '@chakra-ui/core'
import { Container } from 'uiComponents'
import React from 'react'
import { FooterContent } from './index'
import { SocialFollows } from '../social'

export const Footer = () => (
  <Box as="footer" py={7} bg={colorMode('gray.800', 'gray.900')}>
    <Container>
      <FooterContent mb={4} />
      <SocialFollows color="light" />
    </Container>
  </Box>
)
