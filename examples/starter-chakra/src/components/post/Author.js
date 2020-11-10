/** @jsx jsx */
import { jsx, Link as ChakraLink } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'gatsby'

export const Author = ({ post, ...props }) => {
  const { name, slug } = post.author.node
  return (
    <ChakraLink
      as={Link}
      aria-label={`visit ${name} page`}
      to={`/author/${slug}`}
      {...props}
    >
      {name}
    </ChakraLink>
  )
}
