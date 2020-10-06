import React from 'react'
import { SearchPostsQuery, SearchPagesQuery } from './index'
import { searchStyles } from '../../styles'

export const SearchQueries = ({ search, ...props }) => {
  const showResults =
    search && search.length > 0 ? { display: `block` } : { display: `none` }
  return (
    <div className="search-results" {...props}>
      <SearchPostsQuery search={search} />
      <SearchPagesQuery search={search} />
    </div>
  )
}
