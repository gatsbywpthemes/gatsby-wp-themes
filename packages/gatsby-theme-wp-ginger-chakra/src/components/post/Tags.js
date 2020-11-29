import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, chakra } from '@chakra-ui/react'

const ChakraLink = chakra(Link)

export const Tags = ({ tags }) => {
  return (
    <Box
      as="section"
      className="entry-taxonomy entry-tags"
      sx={{
        mb: '3rem',
      }}
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <Box as="h2" mb="0">
        Tags:
      </Box>
      <Flex as="ul" wrap="wrap" textStyle="listRaw">
        {tags.map((tag) => (
          <li key={tag.slug}>
            <ChakraLink
              textStyle="specialLinkUnderline"
              fontSize="xs"
              to={tag.uri}
            >
              {tag.name}
            </ChakraLink>
          </li>
        ))}
      </Flex>
    </Box>
  )
}
