// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
export const Author = ({ post }) => {
  return (
    <span>
      {post.author && post.author.node && (
        <span className="meta-data text-uppercase">
          by{' '}
          <Link
            className="d-inline-block text-secondary text-decoration-none"
            to={post.author.node.uri}
          >
            {post.author.node.name}
          </Link>
        </span>
      )}
    </span>
  )
}
