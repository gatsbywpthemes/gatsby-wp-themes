import React from "react"
import { SearchPostsQuery } from "./SearchPostsQuery"
import { SearchPagesQuery } from "./SearchPagesQuery"
import { SearchResultsWrapper } from "./SearchResultsWrapper"

export const SearchQueries = () => {
  return (
    <SearchResultsWrapper>
      <SearchPostsQuery />
      <SearchPagesQuery />
    </SearchResultsWrapper>
  )
}
