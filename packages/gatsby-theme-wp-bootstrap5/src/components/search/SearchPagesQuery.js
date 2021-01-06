import React from 'react'
import { useSearchQuery } from './useSearchQuery'
import { SearchResults, SearchStats, LoadMoreButton } from './index'

export const SearchPagesQuery = () => {
  const {
    loading,
    error,
    hasNextPage,
    clickable,
    loadMore,
    posts,
  } = useSearchQuery('PAGE')

  if (loading) return <p>Searching pages...</p>
  if (error) return <p>Error - {error.message}</p>
  return (
    <div className="search-results  border-bottom border-dark mb-4">
      <header className="d-flex justify-content-between align-items-center">
        <h3 className="h5">Pages</h3>
        <SearchStats length={posts.length} hasNextPage={hasNextPage} />
      </header>
      <SearchResults posts={posts} />
      {hasNextPage && (
        <LoadMoreButton clickable={clickable} loadMore={loadMore} />
      )}
    </div>
  )
}
