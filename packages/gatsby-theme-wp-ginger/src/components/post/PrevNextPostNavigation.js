/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { pagination, paginationLink } from '../../styles/pagination'

const renderPreviousLink = ({ prev }) => {
  if (prev) {
    return (
      <Link className="left" sx={paginationLink} to={prev}>
        <span>Previous</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <Link className="right" sx={paginationLink} to={next}>
        <span>Up Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

export const PrevNextPostNavigation = ({ ctx, style }) => {
  return (
    <nav sx={{ ...pagination, ...style }}>
      {renderPreviousLink(ctx)}
      {renderNextLink(ctx)}
    </nav>
  )
}
