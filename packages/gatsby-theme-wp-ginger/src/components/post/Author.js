/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
const Author = ({ post }) => {
  return (
    <>
      <span>by </span>
      <Link sx={{ variant: 'special.link' }} to={`/author/${post.author.slug}`}>
        {post.author.name}
      </Link>
    </>
  )
}

export default Author
