import React from 'react'
import { useState } from 'react'
import {
  Input,
  IconButton,
  HStack,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
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
      <HStack>
        <Input
          value={value}
          className="search-box"
          type="search"
          variant="unstyled"
          maxW="80%"
          onChange={handleChange}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          placeholder="search here..."
          fontSize="3xl"
          borderLeft="5px solid"
          borderColor="primary"
          borderRadius={0}
          px={5}
          name="search"
          aria-label="Search here"
        />

        {value.length > 0 && (
          <IconButton
            aria-label="Reset Search"
            variant="ghost"
            size="sm"
            icon={<CloseIcon color={colorMode('text', 'modes.dark.text')} />}
            onClick={() => {
              setValue('')
              setSearch('')
            }}
          />
        )}
      </HStack>
      {search && <SearchQueries search={search} />}
    </div>
  )
}
