import React from 'react'
import { SearchPostsQuery, SearchPagesQuery } from './index'

export const SearchQueries = () => {
  return (
    <div className="search-results">
      <SearchPostsQuery />
      <SearchPagesQuery />
    </div>
  )
}
