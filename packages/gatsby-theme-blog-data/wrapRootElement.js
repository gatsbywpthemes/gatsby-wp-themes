import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { createClient } from './src/apollo/client'
import { themeOptions } from './context'
import defaultOptions from './utils/defaultOptions'
import slashes from 'remove-trailing-slash'
import { useHeadlessWPOptions } from './src/hooks/useHeadlessWPOptions'

const ThemeOptionsProvider = ({ children, options }) => {
  const headlessWPOptions = useHeadlessWPOptions()
  const mergedOptions = {
    ...defaultOptions,
    ...headlessWPOptions,
    ...options,
  }
  return (
    <themeOptions.Provider value={mergedOptions}>
      {children}
    </themeOptions.Provider>
  )
}
export const Root = ({ element }, options) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }
  const client = createClient(slashes(mergedOptions.wordPressUrl))

  return (
    <ApolloProvider client={client}>
      <ThemeOptionsProvider options={options}>{element}</ThemeOptionsProvider>
    </ApolloProvider>
  )
}
