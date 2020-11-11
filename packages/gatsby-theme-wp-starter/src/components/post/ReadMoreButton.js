/** @jsx jsx */
import { jsx, Flex, Button } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'gatsby'

export const ReadMoreButton = ({ location, post, ...props }) => (
  <>
    {location !== 'single' && (
      <Flex justify="flex-end" {...props}>
        <Button
          colorScheme="purple"
          as={Link}
          to={post.uri}
          className="read-more"
          aria-label="Read More from this post"
        >
          Read More
        </Button>
      </Flex>
    )}
  </>
)
