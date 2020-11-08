import React from 'react'
import { withPrefix } from 'gatsby'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Link } from 'gatsby'
import { Heading } from '@chakra-ui/core'

export const SiteBranding = ({ title, ...props }) => {
  const { logoFileName } = useThemeOptions()
  return (
    <>
      {logoFileName ? (
        <Link to="/" rel="home">
          <img src={`${withPrefix('/')}${logoFileName}`} alt="logo" />
        </Link>
      ) : (
        <Heading as="h1" textStyle="branding" {...props}>
          <Link to="/" rel="home">
            {title}
          </Link>
        </Heading>
      )}
    </>
  )
}
