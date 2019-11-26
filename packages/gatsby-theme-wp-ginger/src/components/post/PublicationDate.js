/** @jsx jsx */
import { jsx } from 'theme-ui'
import Date from './Date'
import { Link } from 'gatsby'

const PublicationDate = ({ post, postsPrefix, location }) => {
  return location === 'archive' ? (
    <Link
      sx={{ variant: 'special.link', display: 'inline-block', mb: 3 }}
      className="meta-data"
      to={postsPrefix ? `/${postsPrefix}/${post.uri}` : `/${post.uri}`}
    >
      <Date date={post.date} />
    </Link>
  ) : (
    <span
      sx={{ variant: 'special', mb: 3, display: 'inline-block' }}
      className="meta-data"
    >
      / <Date date={post.date} /> /
    </span>
  )
}

export default PublicationDate
