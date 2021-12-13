import React, { useContext } from "react"
import { SearchContext } from "./context"
import { SearchStatsWrapper } from "./SearchStatsWrapper"
import { useSearchQuery } from "./useSearchQuery"

export const SearchStats = ({ type }) => {
  const search = useContext(SearchContext)
  const { hasNextPage, posts } = useSearchQuery(type)
  return (
    !hasNextPage && (
      <SearchStatsWrapper>
        {posts.length ? `${posts.length} result(s)` : `no results`} for {search}
      </SearchStatsWrapper>
    )
  )
}
