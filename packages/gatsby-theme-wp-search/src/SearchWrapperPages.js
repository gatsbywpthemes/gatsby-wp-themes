import React from "react"
import { SearchStats } from "./SearchStats"

export const SearchWrapperPages = ({ children }) => {
  return (
    <section className="search-results-pages">
      <header>
        <h3>Pages</h3>
        <SearchStats type="PAGE" />
      </header>
      {children}
    </section>
  )
}
