/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'

export const ReadMoreButton = ({ location, post, ...props }) => (
  <>
    {location !== 'single' && (
      <Flex sx={{ justifyContent: [`center`, `flex-end`] }} {...props}>
        <Link
          to={post.uri}
          className="read-more"
          sx={{ variant: `buttons.secondary` }}
          aria-label="Read More from this post"
        >
          Read More
        </Link>
      </Flex>
    )}
  </>
)
