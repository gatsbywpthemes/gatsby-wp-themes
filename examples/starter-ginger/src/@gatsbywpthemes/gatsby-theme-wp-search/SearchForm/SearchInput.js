import React from "react"

export const SearchInput = (props) => {
  return (
    <input
      css={{
        "::-webkit-search-cancel-button": { WebkitAppearance: "none" },
      }}
      className="search-input w-full !px-2 !py-0.5 bg-transparent border-0 border-b focus:outline-none focus:ring-0"
      placeholder="search here..."
      aria-label="Search here"
      {...props}
    />
  )
}
