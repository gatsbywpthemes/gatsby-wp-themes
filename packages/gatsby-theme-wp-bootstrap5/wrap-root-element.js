/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react'
import variables from './src/styles/variables.scss'
const theme = {
  sizes: {
    content: variables.width,
  },
  colors: {
    primary: 'hotpink',
  },
}

export default ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
