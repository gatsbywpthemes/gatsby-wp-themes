import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Flex, chakra, Link } from '@chakra-ui/react'

export const Tags = ({ tags }) => {
  return (
    <Box as="section" className="entry-taxonomy entry-tags" mb="12">
      <Box as="h2" mb="0">
        Tags:
      </Box>
      <Flex as="ul" wrap="wrap" textStyle="listRaw">
        {tags.map((tag) => (
          <chakra.li key={tag.slug} textStyle="separateWithMiddots">
            <Link
              as={GatsbyLink}
              to={tag.uri}
              textStyle="specialLinkUnderline"
              fontSize="xs"
            >
              {tag.name}
            </Link>
          </chakra.li>
        ))}
      </Flex>
    </Box>
  )
}
