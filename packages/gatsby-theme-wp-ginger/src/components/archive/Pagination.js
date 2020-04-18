/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { pagination, paginationLink } from '../../styles/pagination'

const renderPreviousLink = previousPagePath => {
  if (previousPagePath) {
    return (
      <Link
        className="left"
        sx={{ ...paginationLink, fontSize: 'xs' }}
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
        sx={{ ...paginationLink, fontSize: 'xs' }}
        to={nextPagePath}
      >
        <span>Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const Pagination = ({ ctx }) => {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return ''
  }
  return (
    <nav sx={pagination}>
      {renderPreviousLink(previousPagePath)}
      <span aria-current="page" className="page-numbers current">
        {humanPageNumber}
      </span>
      {renderNextLink(nextPagePath)}
    </nav>
  )
}

export default Pagination
