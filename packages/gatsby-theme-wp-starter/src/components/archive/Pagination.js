import React from 'react'
import { Link } from 'gatsby'

const renderPreviousLink = (previousPagePath) => {
  if (previousPagePath) {
    return (
      <Link className="newer" to={previousPagePath}>
        <span>Previous</span>
      </Link>
    )
  } else {
    return <span />
  }
}

const renderNextLink = (nextPagePath) => {
  if (nextPagePath) {
    return (
      <Link className="older" to={nextPagePath}>
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
    <nav>
      {renderPreviousLink(previousPagePath)}
      <span aria-current="page" className="page-numbers current">
        {humanPageNumber}
      </span>
      {renderNextLink(nextPagePath)}
    </nav>
  )
}
