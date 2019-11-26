import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { createClient } from './src/apollo/client'
import { themeOptions } from './context'
import defaultOptions from './utils/defaultOptions'
export const Root = ({ element }, options) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }
  const client = createClient(mergedOptions.wordPressUrl)

  return (
    <ApolloProvider client={client}>
      <themeOptions.Provider value={mergedOptions}>
        {element}
      </themeOptions.Provider>
    </ApolloProvider>
  )
}
