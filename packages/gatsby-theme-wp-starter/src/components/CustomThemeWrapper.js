import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import customTheme from 'starterSrc/chakra/theme'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
export const CustomThemeWrapper = ({ children }) => {
  const { overrideWPColors } = useThemeOptions()
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

  const wpColors = data.wp.headlesswp?.cssTheme?.colors.reduce((acc, c) => {
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

  const colors = overrideWPColors
    ? {
        ...wpColors,
        ...customTheme.colors,
        modes: {
          dark: {
            ...modes?.dark,
            ...customTheme.colors.modes.dark,
          },
        },
      }
    : {
        ...customTheme.colors,
        ...wpColors,
        modes: {
          dark: {
            ...customTheme.colors.modes.dark,
            ...modes?.dark,
          },
        },
      }
  const theme = extendTheme({
    ...customTheme,
    colors,
  })
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
