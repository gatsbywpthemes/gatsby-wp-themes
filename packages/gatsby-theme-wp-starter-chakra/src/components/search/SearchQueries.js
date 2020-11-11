import React from 'react'
import { SearchPostsQuery, SearchPagesQuery } from 'starterComponents'

export const SearchQueries = ({ search, ...props }) => {
  return (
    <div className="search-results" {...props}>
      <SearchPostsQuery search={search} />
      <SearchPagesQuery search={search} />
    </div>
  )
}
