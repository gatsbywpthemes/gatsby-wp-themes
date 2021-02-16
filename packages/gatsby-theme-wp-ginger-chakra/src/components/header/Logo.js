import React from 'react'
import { Link, withPrefix } from 'gatsby'
import Img from 'gatsby-image'
import { chakra, useColorMode } from '@chakra-ui/react'
import { useHeadlessWPOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Logo = () => {
  const { logo = false, darkModeLogo = false } = useHeadlessWPOptions()
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
        width="100%"
        className="logo-img"
        src={
          colorMode === 'dark' && darkModeLogo
            ? darkModeLogo.localFile.childImageSharp.original.src
            : logo.localFile.childImageSharp.original.src
        }
        alt="logo"
      />
    </chakra.a>
  )
}
