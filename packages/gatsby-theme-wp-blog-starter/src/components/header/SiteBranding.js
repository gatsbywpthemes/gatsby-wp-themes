/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { Link, withPrefix } from 'gatsby'

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
