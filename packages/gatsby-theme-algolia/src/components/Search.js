/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useMemo } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"
import SearchTrigger from "./SearchTrigger"
import SearchResults from "./SearchResults"

const Search = ({ indices }) => {
  const [query, setQuery] = useState(``)
  const [openSearch, setOpenSearch] = useState(false)
  const appId = process.env.GATSBY_ALGOLIA_APP_ID
  const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY
  // useMemo prevents the searchClient from being recreated on every render.
  // Avoids unnecessary XHR requests (see https://tinyurl.com/yyj93r2s).
  const searchClient = useMemo(() => algoliasearch(appId, searchKey), [
    appId,
    searchKey
  ])
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <SearchTrigger openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <SearchResults query={query} indices={indices} />
    </InstantSearch>
  )
}

export default Search
