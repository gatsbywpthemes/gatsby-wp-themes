/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
const Author = ({ post }) => {
  return (
    <>
      {post.author && (
        <>
          <span>by </span>
          <Link
            sx={{ variant: 'special.underlineOnHover' }}
            to={`/${post.author.uri}`}
          >
            {post.author.name}
          </Link>
        </>
      )}
    </>
  )
}

export default Author
