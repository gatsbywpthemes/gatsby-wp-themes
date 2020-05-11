/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { postNavigationStyles } from '../../styles'

const renderPreviousLink = ({ prev }) => {
  let previousLink = null
  if (!prev) {
    return <span />
  } else {
    previousLink = `${prev}`
  }

  return (
    <Link
      className="left"
      to={previousLink}
      sx={{ ...postNavigationStyles.paginationLink }}
    >
      <span>Previous</span>
    </Link>
  )
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <Link
        className="right"
        to={`${next}`}
        sx={{ ...postNavigationStyles.paginationLink }}
      >
        <span>Up Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

export const PrevNextPostNavigation = ({ ctx, style }) => {
  return (
    <nav sx={{ ...postNavigationStyles.pagination, ...style }}>
      {renderPreviousLink(ctx)}
      {renderNextLink(ctx)}
    </nav>
  )
}
