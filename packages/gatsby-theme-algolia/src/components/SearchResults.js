/** @jsx jsx */
import { jsx, Box, Styled } from "theme-ui"
import { Hits, Index, connectStateResults } from "react-instantsearch-dom"
import SearchFooter from "./SearchFooter"
import * as hitComps from "./HitComps"

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) => {
    return res && res.nbHits > 0 ? children : `No results for '${state.query}'`
  }
)
const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

const SearchResults = ({ indices, query }) => {
  const showResults =
    query && query.length > 0 ? { display: `block` } : { display: `none` }
  return (
    <Box
      className="search-results"
      sx={{
        ...showResults,
        variant: `search.results`
      }}
    >
      {indices.map(({ name, title, hitComp }) => (
        <Index key={name} indexName={name}>
          <header>
            <Styled.h3>{title}</Styled.h3>
            <Box className="stats">
              <Stats />
            </Box>
          </header>
          <Box className="results">
            <Results>
              <Hits hitComponent={hitComps[hitComp]} />
            </Results>
          </Box>
        </Index>
      ))}
      <SearchFooter />
    </Box>
  )
}

export default SearchResults
