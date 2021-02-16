import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { createClient } from './src/apollo/client'
import { themeOptions } from './context'
import defaultOptions from './utils/defaultOptions'
import slashes from 'remove-trailing-slash'

export const Root = ({ element }, options) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }
  const client = createClient(slashes(mergedOptions.wordPressUrl))

  return (
    <ApolloProvider client={client}>
      <themeOptions.Provider value={mergedOptions}>
        {element}
      </themeOptions.Provider>
    </ApolloProvider>
  )
}
