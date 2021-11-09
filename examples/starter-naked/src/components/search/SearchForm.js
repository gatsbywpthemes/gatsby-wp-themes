import React from "react"
import { useState } from "react"
import { MdClose as CloseIcon } from "react-icons/md"
import { SearchQueries } from "./SearchQueries"

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
          className="search-box max-w-[80%] text-3xl border-l-[5px] border-accentColor dark:border-dark-accentColor px-5"
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
