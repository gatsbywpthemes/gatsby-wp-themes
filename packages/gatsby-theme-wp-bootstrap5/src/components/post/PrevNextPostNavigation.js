/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { paginationStyles, paginationLinkStyles } from '../../styles'

const renderPreviousLink = ({ prev }) => {
  if (prev) {
    return (
      <Link className="left" sx={paginationLinkStyles} to={prev}>
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
      <Link className="right" sx={paginationLinkStyles} to={next}>
        <span>Up Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

export const PrevNextPostNavigation = ({ ctx, style }) => {
  return (
    <nav sx={{ ...paginationStyles, ...style }}>
      {renderPreviousLink(ctx)}
      {renderNextLink(ctx)}
    </nav>
  )
}
