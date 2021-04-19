import React from 'react'
import { Link, withPrefix } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { chakra, useColorMode } from '@chakra-ui/react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Logo = () => {
  const { logo, darkModeLogo } = useThemeOptions()
  const { colorMode } = useColorMode()
  const img = colorMode === 'dark' && darkModeLogo ? darkModeLogo : logo
  return (
    <chakra.a
      as={Link}
      px={[0, null, 3]}
      py={3}
      className="logo"
      to="/"
      rel="home"
    >
      {logo && (
        <>
          {img.localFile ? (
            <GatsbyImage
              image={img.localFile.childImageSharp.gatsbyImageData}
              alt="logo"
            />
          ) : (
            <chakra.img
              maxHeight={['3rem', null, '100%']}
              className="logo-img"
              src={
                colorMode === 'dark' && darkModeLogo
                  ? withPrefix(darkModeLogo)
                  : withPrefix(logo)
              }
              alt="logo"
            />
          )}
        </>
      )}
    </chakra.a>
  )
}
