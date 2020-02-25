/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import SearchPostsQuery from './SearchPostsQuery'
import SearchPagesQuery from './SearchPagesQuery'

const SearchResults = ({ search }) => {
  const showResults =
    search && search.length > 0 ? { display: `block` } : { display: `none` }
  return (
    <Box
      className="search-results"
      sx={{
        ...showResults,
        variant: `search.resultsBasic`,
      }}
    >
      <SearchPostsQuery search={search} />
      <SearchPagesQuery search={search} />
    </Box>
  )
}

export default SearchResults
