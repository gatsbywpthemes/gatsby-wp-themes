import React from 'react'
import { Link } from 'gatsby'

export const ReadMoreButton = ({ location, post, ...props }) => (
  <>
    {location !== 'single' && (
      <div {...props}>
        <Link
          to={post.uri}
          className="read-more"
          aria-label="Read More from this post"
        >
          Read More
        </Link>
      </div>
    )}
  </>
)
