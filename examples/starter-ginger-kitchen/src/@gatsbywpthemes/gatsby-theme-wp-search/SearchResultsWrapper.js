import React from "react"
import clsx from "clsx"

export const SearchResultsWrapper = ({ children }) => {
  return (
    <div
      className={clsx(
        "search-results",
        "bg-searchBg dark:bg-dark-searchBg",
        "overflow-scroll",
        "absolute left-0 top-20 lg:top-[93px]",
        "w-[100px lg:w-[600px]",
        "z-10"
      )}
    >
      {children}
    </div>
  )
}
