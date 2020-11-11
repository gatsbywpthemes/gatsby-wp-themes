/** @jsx jsx */
import { jsx, Box, useColorModeValue as colorMode } from '@chakra-ui/core'

export const TransparentCard = (props) => (
  <Box
    position="relative"
    p={4}
    zIndex={0}
    boxShadow="lg"
    _before={{
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -1,
      bg: colorMode('whiteAlpha.700', 'ultraDark'),
      opacity: 0.6,
    }}
    {...props}
  />
)
