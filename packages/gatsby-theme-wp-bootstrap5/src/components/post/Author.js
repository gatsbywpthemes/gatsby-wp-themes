/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
export const Author = ({ post }) => {
  return (
    <>
      {post.author && post.author.node && (
        <small>
          <i>by </i>
          <Link
            className="d-inline-block text-secondary"
            to={post.author.node.uri}
          >
            {post.author.node.name}
          </Link>
        </small>
      )}
    </>
  )
}
