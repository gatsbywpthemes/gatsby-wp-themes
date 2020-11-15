import React from 'react'
import { SearchPostsQuery, SearchPagesQuery } from './index'

export const SearchQueries = ({ search }) => {
  const showResults =
    search && search.length > 0 ? { display: `block` } : { display: `none` }
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
