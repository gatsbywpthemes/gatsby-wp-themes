/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { withPrefix } from 'gatsby'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Link } from 'gatsby'

export const SiteBranding = ({ title, ...props }) => {
  const { logoFileName } = useThemeOptions()
  return (
    <>
      {logoFileName ? (
        <Link to="/" rel="home">
          <img
            src={`${withPrefix('/')}${logoFileName}`}
            alt="logo"
            sx={{ mb: 0 }}
          />
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
