import React from "react"

export const LoadMoreButton = ({ clickable, loadMore }) => {
  return clickable ? (
    <button type="button" onClick={loadMore}>
      Load More
    </button>
  ) : (
    <p>Loading...</p>
  )
}
