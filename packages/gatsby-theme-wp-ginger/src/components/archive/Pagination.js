/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { paginationStyles, paginationLinkStyles } from '../../styles'

const renderPreviousLink = previousPagePath => {
  if (previousPagePath) {
    return (
      <Link
        className="left"
        sx={{ ...paginationLinkStyles, fontSize: 'xs' }}
        to={previousPagePath}
      >
        <span>Previous</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const renderNextLink = nextPagePath => {
  if (nextPagePath) {
    return (
      <Link
        className="right"
        sx={{ ...paginationLinkStyles, fontSize: 'xs' }}
        to={nextPagePath}
      >
        <span>Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

export const Pagination = ({ ctx }) => {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return ''
  }
  return (
    <nav sx={paginationStyles}>
      {renderPreviousLink(previousPagePath)}
      <span aria-current="page" className="page-numbers current">
        {humanPageNumber}
      </span>
      {renderNextLink(nextPagePath)}
    </nav>
  )
}
