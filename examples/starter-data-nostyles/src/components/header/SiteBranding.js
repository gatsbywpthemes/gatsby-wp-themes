import React from 'react'
import { withPrefix } from 'gatsby'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { Link } from 'gatsby'

export const SiteBranding = ({ title, ...props }) => {
  const { logoFileName } = useThemeOptions()
  return (
    <>
      {logoFileName ? (
        <Link to="/" rel="home">
          <img src={`${withPrefix('/')}${logoFileName}`} alt="logo" />
        </Link>
      ) : (
        <h1 {...props}>
          <Link to="/" rel="home">
            {title}
          </Link>
        </h1>
      )}
    </>
  )
}
