/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { pagination, paginationLink } from '../../styles/pagination'

const renderPreviousLink = ({ prev, postsPrefix }) => {
  let previousLink = null
  if (!prev) {
    return <span />
  } else {
    previousLink = postsPrefix ? `/${postsPrefix}/${prev.uri}` : `/${prev.uri}`
  }

  return (
    <Link className="left" sx={paginationLink} to={previousLink}>
      <span>Previous</span>
    </Link>
  )
}

const renderNextLink = ({ next, postsPrefix }) => {
  if (next) {
    return (
      <Link
        className="right"
        sx={paginationLink}
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
    <nav sx={{ ...pagination, ...style }}>
      {renderPreviousLink(ctx)}
      {renderNextLink(ctx)}
    </nav>
  )
}

export default PrevNextPostNavigation
