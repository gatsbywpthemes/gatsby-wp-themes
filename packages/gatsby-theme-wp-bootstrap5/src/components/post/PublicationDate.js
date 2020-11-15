import React from 'react'
import { Date } from './index'
import { Link } from 'gatsby'

export const PublicationDate = ({ post, location }) => {
  return location === 'archive' ? (
    <>
      {post.date && (
        <Link
          className="meta-data mb-3 d-inline-block text-secondary text-decoration-none"
          to={post.uri}
        >
          <Date date={post.date} />
        </Link>
      )}
    </>
  ) : (
    <>
      {post.date && (
        <span className="meta-data mb-3 d-inline-block text-secondary">
          <Date date={post.date} />
        </span>
      )}
    </>
  )
}
