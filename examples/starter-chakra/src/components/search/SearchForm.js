import React from 'react'
import { useState } from 'react'
import { Input, IconButton } from '@chakra-ui/core'
import { SmallCloseIcon } from '@chakra-ui/icons'

import { SearchQueries } from './index'

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
        <div className="search-box">
          <Input
            value={value}
            type="search"
            variant="unstyled"
            maxW="80%"
            onChange={handleChange}
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            placeholder="search here..."
            fontSize="3xl"
            color="blue.100"
            borderLeft="5px solid"
            borderColor="primary"
            borderRadius={0}
            px={5}
            name="search"
            aria-label="Search here"
          />
        </div>
        {/* {value.length > 0 && (
          <SmallCloseIcon
            aria-label="Reset Search"
            color="white"
            onClick={() => {
              setValue('')
              setSearch('')
            }}
          />
        )} */}
      </div>
      {search && <SearchQueries search={search} />}
    </div>
  )
}
