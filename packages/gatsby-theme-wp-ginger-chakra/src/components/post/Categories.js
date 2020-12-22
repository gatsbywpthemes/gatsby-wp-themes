import React from 'react'
import { Link } from 'gatsby'
import { Box, chakra } from '@chakra-ui/react'

const ChakraLink = chakra(Link)
export const Categories = ({ post }) => {
  return (
    <>
      <chakra.span textStyle="special">in </chakra.span>
      <Box as="ul" d="inline-flex" textStyle="listRaw">
        {post.categories.nodes.map((category) => (
          <chakra.li key={category.name} textStyle="separateWithMiddots">
            <ChakraLink
              textStyle="specialLinkUnderline"
              fontWeight="bold"
              to={category.uri}
              rel="category"
            >
              {category.name}
            </ChakraLink>
          </chakra.li>
        ))}
      </Box>
    </>
  )
}
