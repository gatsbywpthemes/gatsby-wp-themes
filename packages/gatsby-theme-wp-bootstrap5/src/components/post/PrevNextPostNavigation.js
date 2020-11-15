import React from 'react'
import { Link } from 'gatsby'

const renderPreviousLink = ({ prev }) => {
  if (prev) {
    return (
      <Link className="btn btn-dark btn-sm text-uppercase" to={prev}>
        <span>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-left-short"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          Previous
        </span>
      </Link>
    )
  } else {
    return <span />
  }
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <Link className="btn btn-dark btn-sm text-uppercase" to={next}>
        <span>
          Up Next{' '}
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right-short"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </span>
      </Link>
    )
  } else {
    return <span />
  }
}

export const PrevNextPostNavigation = ({ ctx, style }) => {
  return (
    <nav className="" aria-label="Page navigation">
      <ul className="pagination justify-content-between mb-0">
        <li className="page-item">{renderPreviousLink(ctx)}</li>
        <li class="page-item">{renderNextLink(ctx)}</li>
      </ul>
    </nav>
  )
}
