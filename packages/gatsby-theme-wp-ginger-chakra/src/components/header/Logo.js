import React from 'react'
import { Link, withPrefix } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { chakra, useColorMode } from '@chakra-ui/react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Logo = () => {
  const { logo, darkModeLogo } = useThemeOptions()
  console.log(logo, darkModeLogo)
  const { colorMode } = useColorMode()
  const img = colorMode === 'dark' && darkModeLogo ? darkModeLogo : logo
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
      {logo && (
        <GatsbyImage
          image={img.localFile.childImageSharp.gatsbyImageData}
          alt="logo"
        />
      )}
    </chakra.a>
  )
}
