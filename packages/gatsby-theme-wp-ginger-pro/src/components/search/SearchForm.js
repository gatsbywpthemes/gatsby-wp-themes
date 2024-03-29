import React, { useState, useContext } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { Box, Flex, Button } from '@chakra-ui/react'
import { SearchQueries } from 'gingerThemeComponents'
import {
  SearchContext,
  DispatchSearchContext,
} from 'gingerThemeComponents/search/context'
import { Input } from 'gingerThemeUiComponents/Input'

export const SearchForm = () => {
  const search = useContext(SearchContext)
  const [value, setValue] = useState(search)
  const dispatch = useContext(DispatchSearchContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ search: value })
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <Box position="relative" mb="6">
        <Box as={FiSearch} position="absolute" top="0" bottom="0" my="auto" />
        <Flex as="form" onSubmit={handleSubmit}>
          <Box position="relative" w="full">
            <Input
              w="full"
              py="2"
              pl="8"
              h="100%"
              value={value}
              type="search"
              onChange={handleChange}
              onFocus={() => dispatch({ escInSearch: true })}
              onBlur={() => dispatch({ escInSearch: false })}
              placeholder="search here..."
              aria-label="Search here"
            />
            {value.length > 0 && (
              <Button
                variant="ghost"
                position="absolute"
                right="0"
                h="100%"
                className="reset-button"
                type="reset"
                aria-label="Reset Search"
                onClick={() => {
                  setValue('')
                  dispatch({ search: '' })
                }}
              >
                <FiX />
              </Button>
            )}
          </Box>
          <Button type="submit" height="auto">
            Search
          </Button>
        </Flex>
      </Box>
      {/* value && search so that results are reset on Escape */}
      {value && search && <SearchQueries search={search} />}
    </>
  )
}
