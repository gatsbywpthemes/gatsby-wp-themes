import React from "react"
import { SearchResults } from "./SearchResults"
import Loader from "react-spinners/BeatLoader"
import { useSearchQuery } from "./useSearchQuery"

export const SearchPagesQuery = ({ search }) => {
  const { loading, error, hasNextPage, clickable, loadMore, posts } =
    useSearchQuery(search, "PAGE")

  if (loading)
    return (
      <div className="flex justify-center items-center h-[100px]">
        <Loader className="block" />
      </div>
    )
  if (error) return <p>Error - {error.message}</p>

  return (
    <SearchResults type="Pages" search={search} posts={posts}>
      {clickable && hasNextPage && (
        <button onClick={loadMore} className="btn" type="button">
          Load More
        </button>
      )}
    </SearchResults>
  )
}
