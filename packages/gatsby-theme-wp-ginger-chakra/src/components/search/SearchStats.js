import React, { useContext } from 'react'
import { SearchContext } from 'gingerThemeComponents/search/context'

export const SearchStats = ({ length, hasNextPage }) => {
  const { search } = useContext(SearchContext)
  return (
    !hasNextPage && (
      <div className="stats">
        {length ? `${length} results` : `no results for ${search}`}
      </div>
    )
  )
}
