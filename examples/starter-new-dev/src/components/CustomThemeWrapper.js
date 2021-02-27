import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import customTheme from 'starterSrc/chakra/theme'
export const CustomThemeWrapper = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      wp {
        headlesswp {
          cssTheme {
            colors {
              name
              hexValue
            }
            modes {
              name
              colors {
                hexValue
                name
              }
            }
          }
        }
      }
    }
  `)

  const colors = data.wp.headlesswp?.cssTheme?.colors.reduce((acc, c) => {
    acc[c.name] = c.hexValue
    return acc
  }, {})

  const modes = data.wp.headlesswp?.cssTheme?.modes.reduce((acc, c) => {
    acc[c.name] = c.colors.reduce((acc, c) => {
      acc[c.name] = c.hexValue
      return acc
    }, {})
    return acc
  }, {})

  const theme = extendTheme({
    ...customTheme,
    colors: {
      ...customTheme.colors,
      ...colors,
      modes: {
        dark: {
          ...customTheme.colors.modes.dark,
          ...modes?.dark,
        },
      },
    },
  })
  console.log(modes, theme)
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
