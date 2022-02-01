import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link, chakra } from '@chakra-ui/react'

export const Author = ({ post }) => {
  return (
    post.author?.node && (
      <>
        <chakra.span textStyle="special">by </chakra.span>
        <Link
          as={GatsbyLink}
          textStyle="specialLinkUnderline"
          fontWeight="bold"
          to={post.author.node.uri}
        >
          {post.author.node.name}
        </Link>
      </>
    )
  )
}
