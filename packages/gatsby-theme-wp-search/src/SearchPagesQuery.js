import React from "react"
import { useSearchQuery } from "./useSearchQuery"
import { SearchResults } from "./SearchResults"
import { LoadMoreButton } from "./LoadMoreButton"
import { SearchWrapperPages } from "./SearchWrapperPages"
import { Loading } from "./Loading"

export const SearchPagesQuery = () => {
  const { loading, error, hasNextPage, clickable, loadMore, posts } =
    useSearchQuery("PAGE")
  if (loading) return <Loading>Searching pages...</Loading>
  if (error) return <p>Error - {error.message}</p>
  return (
    <SearchWrapperPages>
      <SearchResults posts={posts} />
      {hasNextPage && (
        <LoadMoreButton clickable={clickable} loadMore={loadMore} />
      )}
    </SearchWrapperPages>
  )
}
