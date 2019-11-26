/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { SearchBox } from "react-instantsearch-dom"
import { Button } from "grommet"
import { Search as SearchIcon } from "grommet-icons"
const SearchTrigger = ({ openSearch, setOpenSearch }) => (
  <Flex sx={{ variant: `search` }}>
    <Button
      a11yTitle="Search here"
      icon={<SearchIcon />}
      onClick={() => setOpenSearch(!openSearch)}
      sx={{ variant: `search.icon` }}
    />

    <SearchBox
      className="search-box"
      sx={{
        variant: `search.box`
      }}
    />
  </Flex>
)

export default SearchTrigger
