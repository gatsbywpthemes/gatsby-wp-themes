import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, chakra } from '@chakra-ui/react'

export const Categories = ({ post }) => {
  return (
    <>
      <chakra.span textStyle="special">in </chakra.span>
      <Box as="ul" d="inline-flex" textStyle="listRaw">
        {post.categories.nodes.map((category) => (
          <chakra.li key={category.name} textStyle="separateWithMiddots">
            <Link
              as={GatsbyLink}
              textStyle="specialLinkUnderline"
              fontWeight="bold"
              to={category.uri}
              rel="category"
            >
              {category.name}
            </Link>
          </chakra.li>
        ))}
      </Box>
    </>
  )
}
