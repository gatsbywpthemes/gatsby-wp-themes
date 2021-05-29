import React from 'react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { Link } from 'gatsby'
import {
  Heading,
  Flex,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react'
import { Logo } from 'baseComponents'

export const SiteBranding = ({ title, ...props }) => {
  const { logo } = useThemeOptions()
  const linkColor = useColorModeValue('accent', 'modes.dark.accent')
  return (
    <Flex align="center" height="100%">
      {logo ? (
        <Logo />
      ) : (
        <Heading
          as="h1"
          textTransform="uppercase"
          fontSize="2xl"
          mb={0}
          letterSpacing="wider"
          {...props}
        >
          <ChakraLink
            as={Link}
            _hover={{
              textDecoration: 'none',
              color: linkColor,
            }}
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
