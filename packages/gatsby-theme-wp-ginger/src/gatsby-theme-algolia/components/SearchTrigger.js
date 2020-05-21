/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { SearchBox } from 'react-instantsearch-dom'
import { FiSearch } from 'react-icons/fi'
import { searchAlgoliaStyles } from '../../styles/'

const SearchTrigger = () => (
  <Flex sx={searchAlgoliaStyles.container}>
    <FiSearch sx={{ mr: 3 }} />
    <SearchBox
      className="search-box search-box-algolia"
      sx={searchAlgoliaStyles.box}
    />
  </Flex>
)

export default SearchTrigger
