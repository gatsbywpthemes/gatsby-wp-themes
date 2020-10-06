/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
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
    <Box {...props}>
      <Flex sx={{ ...searchStyles }}>
        <Button
          a11yTitle="Search here"
          focusIndicator={false}
          icon={<SearchIcon />}
          sx={{ ...searchStyles.icon }}
        />

        <Box
          className="search-box"
          sx={{
            ...searchStyles.box,
            mb: [`20px`, 0],
          }}
        >
          <input
            value={value}
            type="search"
            onChange={handleChange}
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            placeholder="search here..."
            name="search"
            sx={{ mb: [0, 0, `15px`] }}
            aria-label="Search here"
          />
        </Box>
        {value.length > 0 && (
          <Button
            a11yTitle="Reset Search"
            icon={<FormClose />}
            color="white"
            sx={{
              p: 0,
              svg: {
                stroke: `searchColor`,
                ml: `-12px`,
                mb: [`xxs`, `xs`, `xs`],
              },
            }}
            onClick={() => {
              setValue('')
              setSearch('')
            }}
          />
        )}
      </Flex>
      {search && <SearchQueries search={search} />}
    </Box>
  )
}
