import React from 'react'
import { Link } from 'gatsby'

const renderPreviousLink = (previousPagePath) => {
  if (previousPagePath) {
    return (
      <Link className="btn btn-dark text-uppercase" to={previousPagePath}>
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
      <Link className="btn btn-dark text-uppercase" to={nextPagePath}>
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
    <nav className="border-top pt-4" aria-label="Page navigation">
      <ul className="pagination archive-pagination justify-content-between">
        <li className="page-item flex-grow-1">
          {renderPreviousLink(previousPagePath)}
        </li>
        <li className="page-item disabled text-center flex-grow-1">
          <span className="page-link d-inline-block" aria-current="page">
            {humanPageNumber}
          </span>
        </li>
        <li className="page-item flex-grow-1 text-end">
          {renderNextLink(nextPagePath)}
        </li>
      </ul>
    </nav>
  )
}
