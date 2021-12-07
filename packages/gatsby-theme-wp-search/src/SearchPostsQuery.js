import React from "react"
import { useSearchQuery } from "./useSearchQuery"
import { SearchResults } from "./SearchResults"
import { LoadMoreButton } from "./LoadMoreButton"
import { SearchWrapperPosts } from "./SearchWrapperPosts"
import { Loading } from "./Loading"

export const SearchPostsQuery = () => {
  const { loading, error, hasNextPage, clickable, loadMore, posts } =
    useSearchQuery("POST")
  if (loading) return <Loading>Searching posts...</Loading>
  if (error) return <p>Error - {error.message}</p>
  return (
    <SearchWrapperPosts>
      <SearchResults posts={posts} />
      {hasNextPage && (
        <LoadMoreButton clickable={clickable} loadMore={loadMore} />
      )}
    </SearchWrapperPosts>
  )
}
