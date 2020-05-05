/** @jsx jsx */
import { jsx, Flex, Button } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

export default ({ location, post, ...props }) => (
  <>
    {location !== "single" && (
      <Flex sx={{ justifyContent: [`center`, `flex-end`] }} {...props}>
        <Button
          className="read-more"
          a11YTitle="Read More from this post"
          variant="secondary.gradient.small"
        >
          <Link to={`/${post.uri}`} aria-label="Read More from this post">
            Read More
          </Link>
        </Button>
      </Flex>
    )}
  </>
)
