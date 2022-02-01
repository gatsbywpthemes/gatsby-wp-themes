import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './../chakra/theme'

export const CustomThemeWrapper = ({ children }) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
