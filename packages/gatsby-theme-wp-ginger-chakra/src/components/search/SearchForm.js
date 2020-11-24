/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, Fragment } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { SearchQueries } from './index'
import { searchStyles } from '../../styles'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

export const SearchForm = () => {
  const { instantWPSearch } = useThemeOptions()
  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(value)
  }

  const handleChange = e => {
    setValue(e.target.value)
    if (instantWPSearch) {
      setSearch(e.target.value)
    }
  }

  return (
    <Fragment>
      <div sx={searchStyles.box.container}>
        <FiSearch />
        <div className="search-box" sx={searchStyles.box}>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                value={value}
                type="search"
                onChange={handleChange}
                placeholder="search here..."
                aria-label="Search here"
              />

              {value.length > 0 && (
                <button
                  className="reset-button"
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
            </div>
            {!instantWPSearch && <button type="submit">Search</button>}
          </form>
        </div>
      </div>
      {/* value && search so that results are reset on Escape */}
      {value && search && <SearchQueries search={search} />}
    </Fragment>
  )
}
