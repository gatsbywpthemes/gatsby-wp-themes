import React from 'react'
import { Link } from 'gatsby'

const renderPreviousLink = ({ prev }) => {
  let previousLink = null
  if (!prev) {
    return <span />
  } else {
    previousLink = `${prev}`
  }

  return (
    <Link className="left" to={previousLink}>
      <span>Previous</span>
    </Link>
  )
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <Link className="right" to={`${next}`}>
        <span>Up Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

export const PrevNextPostNavigation = ({ ctx, style }) => {
  return (
    <nav>
      {renderPreviousLink(ctx)}
      {renderNextLink(ctx)}
    </nav>
  )
}
