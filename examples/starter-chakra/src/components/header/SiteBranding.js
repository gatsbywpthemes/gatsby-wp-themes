import React from 'react'
import { withPrefix } from 'gatsby'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { Link } from 'gatsby'
import { Heading, Link as ChakraLink } from '@chakra-ui/react'

export const SiteBranding = ({ title, ...props }) => {
  const { logoFileName } = useThemeOptions()
  return (
    <>
      {logoFileName ? (
        <Link to="/" rel="home">
          <img src={`${withPrefix('/')}${logoFileName}`} alt="logo" />
        </Link>
      ) : (
        <Heading
          as="h1"
          textTransform="uppercase"
          fontSize="2xl"
          letterSpacing="wider"
          {...props}
        >
          <ChakraLink
            as={Link}
            transition="color .4s ease-in-out"
            _hover={{ textDecoration: 'none', color: 'primary' }}
            to="/"
            rel="home"
          >
            {title}
          </ChakraLink>
        </Heading>
      )}
    </>
  )
}
