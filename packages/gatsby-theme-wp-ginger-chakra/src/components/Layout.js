import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import '../styles/blocks.css'
import '../styles/custom-gutenstyles.css'
import { Box, Container } from '@chakra-ui/react'

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

const Layout = ({ useContainer = true, children }) => {
  return (
    <>
      <Box sx={{ variant: 'layout' }}>
        <Header />
        <Box marginLeft={{ md: '6rem' }}>
          <MaybeWithContainer useContainer={useContainer}>
            {children}
          </MaybeWithContainer>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default Layout

/*className={
          colorMode === 'default' ? 'default-color-mode' : 'dark-color-mode'
        }
      >*/
