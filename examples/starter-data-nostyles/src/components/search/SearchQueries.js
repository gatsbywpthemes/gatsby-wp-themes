/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { SearchPostsQuery, SearchPagesQuery } from './index'
import { searchStyles } from '../../styles'

export const SearchQueries = ({ search, ...props }) => {
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
