import React from 'react'
import '../styles/blocks.css'
import '../styles/custom-gutenstyles.css'
import { Box, Container } from '@chakra-ui/react'
import { Header, Footer } from 'gingerThemeComponents'

const MaybeWithContainer = ({ useContainer, children }) => {
  return !useContainer ? (
    children
  ) : (
    <Container
      maxWidth="60rem"
      px="1rem"
      pb={['1.5rem', '2rem', '4.5rem']}
      pt="2rem"
    >
      {children}
    </Container>
  )
}

export const Layout = ({ useContainer = true, children }) => {
  return (
    <>
      <Header />
      <Box marginLeft={{ md: (theme) => theme.sizes.header }}>
        <MaybeWithContainer useContainer={useContainer}>
          {children}
        </MaybeWithContainer>
      </Box>
      <Footer />
    </>
  )
}
