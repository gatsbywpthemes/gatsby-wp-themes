import React, { useContext } from 'react'
import { SearchContext } from './context'

export const SearchStats = ({ length, hasNextPage }) => {
  const { search } = useContext(SearchContext)
  return (
    !hasNextPage && (
      <small className="stats">
        {length ? `${length} results` : `no results for ${search}`}
      </small>
    )
  )
}
