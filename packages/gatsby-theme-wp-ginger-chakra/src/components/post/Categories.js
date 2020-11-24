import React from 'react'
import { Link } from 'gatsby'
import { chakra } from '@chakra-ui/react'

const ChakraLink = chakra(Link)
export const Categories = ({ post }) => {
  return (
    <>
      <chakra.span textStyle="special">in </chakra.span>
      {post.categories.nodes
        .map((category) => (
          <ChakraLink
            textStyle="specialLinkUnderline"
            fontWeight="bold"
            key={category.name}
            to={category.uri}
            rel="category"
          >
            {category.name}
          </ChakraLink>
        ))
        .reduce((accu, elem) => {
          return accu === null ? [elem] : [...accu, ' · ', elem]
        }, null)}
    </>
  )
}
