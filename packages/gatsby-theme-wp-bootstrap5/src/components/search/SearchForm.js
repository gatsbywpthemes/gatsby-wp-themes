import React, { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { SearchQueries } from './index'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const SearchForm = () => {
  const { instantWPSearch } = useThemeOptions()
  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    if (instantWPSearch) {
      setSearch(e.target.value)
    }
  }

  return (
    <>
      <div className="search-box mb-4">
        <form className="list-group list-group-flush" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              value={value}
              type="search"
              onChange={handleChange}
              placeholder="search here..."
              aria-label="Search here"
              className="form-control"
            />

            {value.length > 0 && (
              <button
                className="btn btn-dark"
                type="reset"
                aria-label="Reset Search"
                onClick={() => {
                  setValue('')
                  setSearch('')
                }}
              >
                <FiX />
              </button>
            )}
            {!instantWPSearch && (
              <button
                type="submit"
                className="btn btn-secondary"
                aria-label="Search"
              >
                <FiSearch />
              </button>
            )}
          </div>
        </form>
      </div>

      {/* value && search so that results are reset on Escape */}
      {value && search && <SearchQueries search={search} />}
    </>
  )
}
