import React from 'react'

export const LoadMoreButton = ({ clickable, loadMore }) => {
  return clickable ? (
    <button
      className="btn btn-sm btn-dark ms-auto d-flex mb-1"
      onClick={loadMore}
    >
      Load More
    </button>
  ) : (
    <p>Loading...</p>
  )
}
