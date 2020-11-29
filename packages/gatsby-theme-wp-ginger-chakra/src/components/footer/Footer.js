import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { FooterContent } from './index'

export const Footer = () => (
  <Box
    as="footer"
    p={[4, 4, 0]}
    display={['block', 'block', 'flex']}
    position={['static', 'static', 'fixed']}
    bottom="0"
    fontSize="sm"
    sx={{
      zIndex: 11,
      transformOrigin: '0 0',
      transform: (theme) => [
        '',
        '',
        `translate3d(0, ${
          parseInt(theme.sizes.header[2]) - 1
        }rem, 0) rotate(-90deg)`,
      ],
      height: (theme) => ['auto', 'auto', theme.sizes.header[2]],
      alignItems: 'center',
      textAlign: ['center', 'center', 'left'],
    }}
    color={[
      useColorModeValue('footerColor', 'modes.dark.footerColor'),
      null,
      useColorModeValue('headerColor', 'modes.dark.headerColor'),
    ]}
    bg={[
      useColorModeValue('footerBg', 'modes.dark.footerBg'),
      null,
      'transparent',
    ]}
  >
    <FooterContent />
  </Box>
)
