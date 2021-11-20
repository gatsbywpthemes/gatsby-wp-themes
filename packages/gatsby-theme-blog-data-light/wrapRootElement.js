import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { themeOptions } from './context'
import defaultOptions from './utils/defaultOptions'
import slashes from 'remove-trailing-slash'
import { useHeadlessWPOptions } from './src/hooks/useHeadlessWPOptions'

const ThemeOptionsProvider = ({ children, options }) => {
  const favicon = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          s32: gatsbyImageData(
            height: 32
            width: 32
            quality: 100
            layout: FIXED
          )
          s192: gatsbyImageData(
            height: 192
            width: 192
            quality: 100
            layout: FIXED
          )
          s180: gatsbyImageData(
            height: 180
            width: 180
            quality: 100
            layout: FIXED
          )
          s270: gatsbyImageData(
            height: 270
            width: 270
            quality: 80
            layout: FIXED
          )
        }
      }
    }
  `)

  const headlessWPOptions = useHeadlessWPOptions()
  const mergedOptions = {
    ...defaultOptions,
    faviconFile: favicon?.file,
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

  return (
    <ThemeOptionsProvider options={options}>{element}</ThemeOptionsProvider>
  )
}
