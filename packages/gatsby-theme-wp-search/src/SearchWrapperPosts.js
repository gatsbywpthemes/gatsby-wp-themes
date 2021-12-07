import React from "react"
import { SearchStats } from "./SearchStats"

export const SearchWrapperPosts = ({ children }) => {
  return (
    <section className="search-results-posts">
      <header>
        <h3>Posts</h3>
        <SearchStats type="POST" />
      </header>
      {children}
    </section>
  )
}
