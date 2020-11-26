import React from 'react'
import {
  Link as ChakraLink,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'
import { Link } from 'gatsby'

export const Author = ({ post, ...props }) => {
  const { name, slug } = post.author.node
  return (
    <ChakraLink
      as={Link}
      transition="color 0.4s"
      _hover={{ textDecoration: 'none', color: colorMode('primary', 'dark') }}
      aria-label={`visit ${name} page`}
      to={`/author/${slug}`}
      {...props}
    >
      {name}
    </ChakraLink>
  )
}
