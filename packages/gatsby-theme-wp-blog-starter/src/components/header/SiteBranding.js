/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Link } from 'gatsby'

export const SiteBranding = ({ title, ...props }) => {
  const { logoFileName } = useThemeOptions()
  return (
    <>
      {logoFileName ? (
        <Link to="/" rel="home">
          <h3>logo</h3>
        </Link>
      ) : (
        <h1 sx={{ variant: `text.branding` }} {...props}>
          <Link to="/" rel="home">
            {title}
          </Link>
        </h1>
      )}
    </>
  )
}
