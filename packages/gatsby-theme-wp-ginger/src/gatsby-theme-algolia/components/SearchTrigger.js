/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { SearchBox } from 'react-instantsearch-dom'
import { FiSearch } from 'react-icons/fi'

const SearchTrigger = () => (
  <Flex
    sx={{
      variant: `search.box.container`,
    }}
  >
    <FiSearch sx={{ mr: 3 }} />
    <SearchBox
      autoFocus
      className="search-box"
      sx={{
        variant: `search.box`,
      }}
    />
  </Flex>
)

export default SearchTrigger
