import React, { useContext } from 'react'
import { useSearchQuery } from './useSearchQuery'
import { SearchResults, SearchStats, LoadMoreButton } from './index'
import { SearchContext } from './context'

export const SearchPostsQuery = () => {
  const { loading, error, hasNextPage, clickable, loadMore, posts } =
    useSearchQuery('POST')

  if (loading) return <p>Searching posts...</p>
  if (error) return <p>Error - {error.message}</p>
  return (
    <div className="search-results  border-bottom border-dark mb-4">
      <header className="d-flex justify-content-between align-items-center">
        <h3 className="h5">Posts</h3>
        <SearchStats length={posts.length} hasNextPage={hasNextPage} />
      </header>
      <SearchResults posts={posts} />
      {hasNextPage && (
        <LoadMoreButton clickable={clickable} loadMore={loadMore} />
      )}
    </div>
  )
}
