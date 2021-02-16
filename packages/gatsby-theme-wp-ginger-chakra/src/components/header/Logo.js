import React from 'react'
import { Link, withPrefix } from 'gatsby'
import { chakra, useColorMode } from '@chakra-ui/react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Logo = () => {
  const { logo, darkModeLogo } = useThemeOptions()
  const { colorMode } = useColorMode()
  return (
    <chakra.a
      as={Link}
      px={[0, null, 3]}
      pt={[3, null, 6]}
      pb={[3, null, 6]}
      height={['100%', null, 'auto']}
      className="logo"
      to="/"
      rel="home"
    >
      <chakra.img
        maxHeight="100%"
        className="logo-img"
        src={
          colorMode === 'dark' && darkModeLogo
            ? withPrefix(darkModeLogo)
            : withPrefix(logo)
        }
        alt="logo"
      />
    </chakra.a>
  )
}
