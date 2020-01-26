/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import normalize from 'normalize-path'

const renderPreviousLink = props => {
  const { pageNumber } = props.ctx
  const { prefix, paginationPrefix } = props
  let previousLink = null

  if (!pageNumber || pageNumber === 1) {
    return <span />
  } else if (2 === pageNumber) {
    previousLink = `/${prefix}`
  } else if (2 < pageNumber) {
    previousLink = previousLink = normalize(
      `/${prefix}/${paginationPrefix}/${pageNumber - 1}`
    )
  }

  return (
    <Link className="newer" to={previousLink}>
      <span>Previous</span>
    </Link>
  )
}

const renderNextLink = props => {
  const { hasNextPage, pageNumber } = props.ctx
  const { prefix, paginationPrefix } = props

  if (hasNextPage) {
    const nextLink = normalize(
      `/${prefix}/${paginationPrefix}/${pageNumber + 1}`
    )
    return (
      <Link className="older" to={nextLink}>
        <span>Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const Pagination = ({ ctx, prefix = '' }) => {
  const { paginationPrefix } = useThemeOptions()
  const { pageNumber } = ctx
  // return empty string if there is only one page
  if (pageNumber === 1 && !ctx.hasNextPage) {
    return ''
  }
  return (
    <nav>
      {renderPreviousLink({ ctx, prefix, paginationPrefix })}
      <span aria-current="page" className="page-numbers current">
        {pageNumber}
      </span>
      {renderNextLink({ ctx, prefix, paginationPrefix })}
    </nav>
  )
}

export default Pagination
