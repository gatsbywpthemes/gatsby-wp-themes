import React from 'react'
import { SearchPostsQuery, SearchPagesQuery } from './index'

export const SearchQueries = ({ search, ...props }) => {
  return (
    <div className="search-results" {...props}>
      <SearchPostsQuery search={search} />
      <SearchPagesQuery search={search} />
    </div>
  )
}
