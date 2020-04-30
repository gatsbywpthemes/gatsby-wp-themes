/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { SearchBox } from 'react-instantsearch-dom'
import { FiSearch } from 'react-icons/fi'
import { searchAlgolia as searchstyles } from '../../styles/search'

const SearchTrigger = () => (
  <Flex sx={searchstyles.container}>
    <FiSearch sx={{ mr: 3 }} />
    <SearchBox
      className="search-box search-box-algolia"
      sx={searchstyles.box}
    />
  </Flex>
)

export default SearchTrigger
