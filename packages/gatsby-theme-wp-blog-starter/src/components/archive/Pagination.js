/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import useThemeOptions from 'gatsby-theme-blog-data-v4/src/hooks/useThemeOptions'
import normalize from 'normalize-path'
import paginationStyles from '../../styles/paginationStyles'

const renderPreviousLink = previousPagePath => {
  return (
    <Link className="newer" to={previousPagePath} sx={paginationStyles.links}>
      <span>Previous</span>
    </Link>
  )
}

const renderNextLink = nextPagePath => {
  if (nextPagePath) {
    return (
      <Link className="older" sx={paginationStyles.links} to={nextPagePath}>
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
    <nav sx={paginationStyles}>
      {renderPreviousLink(previousPagePath)}
      <span aria-current="page" className="page-numbers current" sx={{}}>
        {humanPageNumber}
      </span>
      {renderNextLink(nextPagePath)}
    </nav>
  )
}

export default Pagination
