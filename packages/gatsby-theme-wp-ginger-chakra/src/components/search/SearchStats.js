import React, { useContext } from 'react'
import { SearchContext } from 'gingerThemeSrc/context'

export const SearchStats = ({ length }) => {
  const { search } = useContext(SearchContext)
  return (
    <div className="stats">
      {length ? `${length} results` : `no results for ${search}`}
    </div>
  )
}
