import React from 'react'
import { SearchPostsQuery, SearchPagesQuery } from './index'

export const SearchQueries = ({ search }) => {
  return (
    search &&
    search.length > 0 && (
      <div className="search-results">
        <SearchPostsQuery search={search} />
        <SearchPagesQuery search={search} />
      </div>
    )
  )
}
