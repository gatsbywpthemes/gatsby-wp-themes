import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { useTheme, ChakraProvider } from '@chakra-ui/core'
import customTheme from '../gatsby-plugin-chakra-ui/theme'
// import 'normalize.css'
// import '../styles/globalstyles.scss'
import '../styles/wp-styles/styles.scss'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
