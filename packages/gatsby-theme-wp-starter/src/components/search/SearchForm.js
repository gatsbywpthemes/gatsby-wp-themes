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
      <HStack
        sx={{
          'input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus': {
            boxShadow: (theme) =>
              colorMode(
                `0 0 0px 1000px ${theme.colors.searchBg} inset`,
                `0 0 0px 1000px ${theme.colors.modes.dark.searchBg} inset`
              ),
            WebkitTextFillColor: (theme) =>
              colorMode(theme.colors.text, theme.colors.modes.dark.text),
          },
        }}
      >
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
