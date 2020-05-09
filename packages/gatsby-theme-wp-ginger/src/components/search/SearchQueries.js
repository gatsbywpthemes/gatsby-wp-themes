/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { SearchPostsQuery, SearchPagesQuery } from './index'

export const SearchQueries = ({ search }) => {
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
