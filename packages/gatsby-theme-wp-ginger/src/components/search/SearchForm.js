/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { useState, Fragment } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import SearchQuery from './SearchQuery'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

const SearchForm = () => {
  const { instantWPSearch } = useThemeOptions()
  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setSearch(e.target.value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleChange = e => {
    setValue(e.target.value)
    if (instantWPSearch) {
      setSearch(e.target.value)
    }
  }

  return (
    <Fragment>
      <Box
        className="search-box"
        sx={{
          variant: `search.box`,
        }}
      >
        <form>
          <FiSearch sx={{ mr: 3 }} />
          <input
            value={value}
            type="search"
            onChange={handleChange}
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            placeholder="search here..."
            sx={{ mb: [0, 0, `15px`] }}
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
        </form>
      </Box>

      {search && <SearchQuery search={search} />}
    </Fragment>
  )
}

export default SearchForm
