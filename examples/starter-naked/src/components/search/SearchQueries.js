import React from "react"
import { SearchPostsQuery } from "./SearchPostsQuery"
import { SearchPagesQuery } from "./SearchPagesQuery"
import clsx from "clsx"

export const SearchQueries = ({ search, ...props }) => {
  return (
    <div
      className={clsx(
        "search-results",
        "bg-light dark:bg-dark-bg",
        "overflow-scroll",
        "absolute left-0 top-20 lg:top-[93px]",
        "w-[100px lg:w-[]600px]",
        "z-10"
      )}
      css={{ "h3,h4,.stats": { padding: "0 20px" } }}
      {...props}
    >
      <SearchPostsQuery search={search} />
      <SearchPagesQuery search={search} />
    </div>
  )
}
