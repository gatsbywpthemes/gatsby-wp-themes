import React from 'react'
import { Flex, Button } from '@chakra-ui/react'

import { Link } from 'gatsby'

export const ReadMoreButton = ({ location, post, ...props }) => (
  <>
    {location !== 'single' && (
      <Flex justify="flex-end" {...props}>
        <Button
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
