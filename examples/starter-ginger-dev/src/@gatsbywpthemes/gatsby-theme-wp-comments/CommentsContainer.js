import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'

export const CommentsContainer = ({ children }) => {
  return (
    <Box
      as="section"
      bg={useThemeColorModeValue('commentsBg')}
      color={useThemeColorModeValue('commentsColor')}
      py={['6', '16']}
    >
      <Container sx={{ maxWidth: (theme) => theme.sizes.content }}>
        {children}
      </Container>
    </Box>
  )
}
