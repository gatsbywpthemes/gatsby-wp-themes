/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react'
import SearchContextProvider from './src/components/search/context'
import * as variables from './src/styles/_variables.module.scss'

const theme = {
  sizes: {
    content: variables.width,
  },
  colors: {
    primary: 'hotpink',
  },
}

export default ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <SearchContextProvider>{element}</SearchContextProvider>
    </ThemeProvider>
  )
}
