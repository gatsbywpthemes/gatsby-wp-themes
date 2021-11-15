import React from "react"
import { useState } from "react"
import { MdClose as CloseIcon } from "react-icons/md"
import { SearchQueries } from "./SearchQueries"
import clsx from "clsx"

export const SearchForm = (props) => {
  const [value, setValue] = useState("")
  const [search, setSearch] = useState("")

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    setSearch(e.target.value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div {...props}>
      <div className="flex">
        <input
          value={value}
          css={{
            "::-webkit-search-cancel-button": { WebkitAppearance: "none" },
          }}
          className={clsx(
            "search-box",
            "lg:w-[80%] px-5",
            "bg-transparent text-text dark:text-dark-text ",
            "text-3xl",
            "border-0 border-l-[5px] border-accentColor dark:border-dark-accentColor",
            "focus:outline-none focus:ring-gray-200 dark:focus:ring-opacity-20 focus:border-0 focus:border-l-[5px] focus:placeholder-transparent focus:border-accentColor dark:focus:border-dark-accentColor"
          )}
          type="search"
          onChange={handleChange}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          placeholder="search here..."
          name="search"
          aria-label="Search here"
        />

        {value.length > 0 && (
          <button
            aria-label="Reset Search"
            onClick={() => {
              setValue("")
              setSearch("")
            }}
          >
            <CloseIcon />
          </button>
        )}
      </div>
      {search && <SearchQueries search={search} />}
    </div>
  )
}
