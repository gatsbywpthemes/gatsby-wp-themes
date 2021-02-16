import React from 'react'
import { Link } from 'gatsby'
import { useColorMode } from '@chakra-ui/react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Logo = () => {
  const { logo, darkModeLogo } = useThemeOptions()
  const { colorMode } = useColorMode()
  const img = colorMode === 'dark' && darkModeLogo ? darkModeLogo : logo
  return (
    <Link className="logo" to="/" rel="home">
      {logo && (
        <GatsbyImage
          image={img.localFile.childImageSharp.gatsbyImageData}
          alt="logo"
        />
      )}
    </Link>
  )
}
