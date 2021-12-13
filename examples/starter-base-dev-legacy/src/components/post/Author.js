import React from "react"
import { Link as ChakraLink } from "@chakra-ui/react"
import { Link } from "gatsby"

export const Author = ({ post, ...props }) => {
  const { name, slug } = post.author.node
  return (
    <ChakraLink
      as={Link}
      transition="opacity 0.4s"
      _hover={{ textDecoration: "none", opacity: 0.7 }}
      aria-label={`visit ${name} page`}
      to={`/author/${slug}`}
      {...props}
    >
      {name}
    </ChakraLink>
  )
}
