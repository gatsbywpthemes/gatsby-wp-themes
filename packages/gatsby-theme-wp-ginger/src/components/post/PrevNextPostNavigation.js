/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { pagination, paginationLink } from '../../styles/pagination'

const renderPreviousLink = ({ prev }) => {
  let previousLink = null
  if (!prev) {
    return <span />
  } else {
    previousLink = `/${prev}`
  }

  return (
    <Link className="left" sx={paginationLink} to={previousLink}>
      <span>Previous</span>
    </Link>
  )
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <Link className="right" sx={paginationLink} to={`/${next}`}>
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
