/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Date from './Date'
import { Link } from 'gatsby'

const PublicationDate = ({ post, postsPrefix, location }) => {
  return location === 'archive' ? (
    <>
      {post.date && (
        <Link
          sx={{ variant: 'special.link', display: 'inline-block', mb: 3 }}
          className="meta-data"
          to={postsPrefix ? `/${postsPrefix}/${post.uri}` : `/${post.uri}`}
        >
          <Date date={post.date} />
        </Link>
      )}
    </>
  ) : (
    <>
      {post.date && (
        <span
          sx={{ variant: 'special', mb: 3, display: 'inline-block' }}
          className="meta-data"
        >
          / <Date date={post.date} /> /
        </span>
      )}
    </>
  )
}

export default PublicationDate
