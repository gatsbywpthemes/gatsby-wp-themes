import React from 'react'
import { withPrefix } from 'gatsby'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Link } from 'gatsby'
import { Heading, Flex, Link as ChakraLink } from '@chakra-ui/react'

export const SiteBranding = ({ title, ...props }) => {
  const { logoFileName } = useThemeOptions()
  return (
    <Flex align="center" height="100%">
      {logoFileName ? (
        <Link to="/" rel="home">
          <img src={`${withPrefix('/')}${logoFileName}`} alt="logo" />
        </Link>
      ) : (
        <Heading
          as="h1"
          textTransform="uppercase"
          fontSize="2xl"
          // lineHeight={0}
          mb={0}
          letterSpacing="wider"
          {...props}
        >
          <ChakraLink
            as={Link}
            _hover={{ textDecoration: 'none', color: 'primary' }}
            to="/"
            rel="home"
          >
            {title}
          </ChakraLink>
        </Heading>
      )}
    </Flex>
  )
}
