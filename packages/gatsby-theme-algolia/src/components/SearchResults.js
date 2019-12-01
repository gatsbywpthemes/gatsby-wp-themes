/** @jsx jsx */
import { jsx, Box, Styled, Flex } from "theme-ui"
import { Hits, Index, connectStateResults } from "react-instantsearch-dom"
import algoliaLogo from "../images/algolia-logo.svg"
import * as hitComps from "./hitComps"

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
      <footer
        sx={{ px: `m`, pt: `xxs`, mt: `xxs`, borderTop: `1px solid #666` }}
      >
        <Flex
          sx={{
            justifyContent: `flex-end`,
            fontSize: `xs`,
            fontWeight: 300
          }}
        >
          search by{" "}
          <a
            href="https://www.algolia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={algoliaLogo}
              alt="Algolia logo"
              sx={{ width: 60, ml: `xxs`, mt: 6, mb: 6 }}
            />
          </a>
        </Flex>
      </footer>
    </Box>
  )
}

export default SearchResults
