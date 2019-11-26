/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const renderPreviousLink = ({ prev, postsPrefix }) => {
  let previousLink = null
  if (!prev) {
    return <span />
  } else {
    previousLink = postsPrefix ? `/${postsPrefix}/${prev.uri}` : `/${prev.uri}`
  }

  return (
    <Link
      className="older"
      sx={{ variant: `paginationLink` }}
      to={previousLink}
    >
      <span>Previous</span>
    </Link>
  )
}

const renderNextLink = ({ next, postsPrefix }) => {
  if (next) {
    return (
      <Link
        className="newer"
        sx={{ variant: `paginationLink` }}
        to={postsPrefix ? `/${postsPrefix}/${next.uri}` : `/${next.uri}`}
      >
        <span>Up Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const PrevNextPostNavigation = ({ ctx, style }) => {
  return (
    <nav sx={{ variant: `pagination`, ...style }}>
      {renderNextLink(ctx)}
      {renderPreviousLink(ctx)}
    </nav>
  )
}

export default PrevNextPostNavigation
