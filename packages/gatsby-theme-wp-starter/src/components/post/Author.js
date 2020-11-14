/** @jsx jsx */
import { jsx, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'gatsby'

export const Author = ({ post, ...props }) => {
  const { name, slug } = post.author.node
  return (
    <ChakraLink
      as={Link}
      _hover={{ textDecoration: 'none', color: 'red.300' }}
      aria-label={`visit ${name} page`}
      to={`/author/${slug}`}
      {...props}
    >
      {name}
    </ChakraLink>
  )
}
