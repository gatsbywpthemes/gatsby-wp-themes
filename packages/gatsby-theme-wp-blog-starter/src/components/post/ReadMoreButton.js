/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'

export const ReadMoreButton = ({ location, post, ...props }) => (
  <>
    {location !== 'single' && (
      <Flex sx={{ justifyContent: [`center`, `flex-end`] }} {...props}>
        <Button
          className="read-more"
          a11YTitle="Read More from this post"
          variant="secondary"
        >
          <Link to={`/${post.uri}`} aria-label="Read More from this post">
            Read More
          </Link>
        </Button>
      </Flex>
    )}
  </>
)
