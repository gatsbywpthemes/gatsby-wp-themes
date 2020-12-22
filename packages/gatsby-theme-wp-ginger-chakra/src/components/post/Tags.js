import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, chakra } from '@chakra-ui/react'

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
          <chakra.li key={tag.slug} textStyle="separateWithMiddots">
            <chakra.a
              as={Link}
              textStyle="specialLinkUnderline"
              fontSize="xs"
              to={tag.uri}
            >
              {tag.name}
            </chakra.a>
          </chakra.li>
        ))}
      </Flex>
    </Box>
  )
}
