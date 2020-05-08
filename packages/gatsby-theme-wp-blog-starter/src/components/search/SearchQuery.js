/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import SearchPostsQuery from './SearchPostsQuery'
import SearchPagesQuery from './SearchPagesQuery'
import searchStyles from '../../styles/searchStyles'

const SearchResults = ({ search, ...props }) => {
  const showResults =
    search && search.length > 0 ? { display: `block` } : { display: `none` }
  return (
    <Box
      className="search-results"
      sx={{
        ...showResults,
        ...searchStyles.resultsBasic,
      }}
      {...props}
    >
      <SearchPostsQuery search={search} />
      <SearchPagesQuery search={search} />
    </Box>
  )
}

export default SearchResults
