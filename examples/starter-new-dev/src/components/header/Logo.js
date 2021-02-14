import React from 'react'
import { Link, withPrefix } from 'gatsby'
import { useColorMode } from '@chakra-ui/react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Logo = () => {
  const { logo, darkModeLogo } = useThemeOptions()
  const { colorMode } = useColorMode()
  return (
    <Link className="logo" to="/" rel="home">
      <img
        src={
          colorMode === 'dark' && darkModeLogo
            ? withPrefix(darkModeLogo)
            : withPrefix(logo)
        }
        alt="logo"
      />
    </Link>
  )
}
