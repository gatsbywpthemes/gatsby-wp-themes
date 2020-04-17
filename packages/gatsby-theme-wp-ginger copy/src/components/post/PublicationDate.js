/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import Date from './Date'
import { Link } from 'gatsby'
import normalize from 'normalize-path'

const PublicationDate = ({ post, location }) => {
  return location === 'archive' ? (
    <Fragment>
      {post.date && (
        <Link
          sx={{
            variant: 'special.underlineOnHover',
            display: 'inline-block',
            mb: 3,
          }}
          className="meta-data"
          to={normalize(`/${post.uri}`)}
        >
          <Date date={post.date} />
        </Link>
      )}
    </Fragment>
  ) : (
    <Fragment>
      {post.date && (
        <span
          sx={{ variant: 'special', mb: 3, display: 'inline-block' }}
          className="meta-data"
        >
          / <Date date={post.date} /> /
        </span>
      )}
    </Fragment>
  )
}

export default PublicationDate
