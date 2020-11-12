/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Date } from './index'
import { Link } from 'gatsby'

export const PublicationDate = ({ post, location }) => {
  return location === 'archive' ? (
    <Fragment>
      {post.date && (
        <Link
          className="meta-data mb-3 d-inline-block text-secondary"
          to={post.uri}
        >
          <Date date={post.date} />
        </Link>
      )}
    </Fragment>
  ) : (
    <Fragment>
      {post.date && (
        <span className="meta-data mb-3 d-inline-block text-secondary">
          / <Date date={post.date} /> /
        </span>
      )}
    </Fragment>
  )
}
