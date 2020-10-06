import React from 'react'
import { useState } from 'react'
import { Button } from 'grommet'
import { Search as SearchIcon, FormClose } from 'grommet-icons'
import { SearchQueries } from './index'
import { searchStyles } from '../../styles'

export const SearchForm = (props) => {
  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
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
      <div>
        <Button
          a11yTitle="Search here"
          focusIndicator={false}
          icon={<SearchIcon />}
        />

        <div className="search-box">
          <input
            value={value}
            type="search"
            onChange={handleChange}
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            placeholder="search here..."
            name="search"
            aria-label="Search here"
          />
        </div>
        {value.length > 0 && (
          <Button
            a11yTitle="Reset Search"
            icon={<FormClose />}
            color="white"
            onClick={() => {
              setValue('')
              setSearch('')
            }}
          />
        )}
      </div>
      {search && <SearchQueries search={search} />}
    </div>
  )
}
