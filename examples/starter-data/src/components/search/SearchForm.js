/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { useState, Fragment } from 'react'
import { useStaticQuery } from 'gatsby'
import { Button } from 'grommet'
import { Search as SearchIcon, FormClose } from 'grommet-icons'
import { useQuery } from '@apollo/client'
import SearchQuery from './SearchQuery'

const SearchForm = () => {
  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')
  const [postsResults, setPostsResults] = useState([])
  const [pagesResults, setPagesResults] = useState([])

  // const data = useStaticQuery(POSTS_AND_PAGES_QUERY)
  // console.log('allPostsSearch', data.wp.posts)
  // const posts = data.wp.posts.nodes
  // const pages = data.wp.pages.nodes
  // const postsData = data.wp.posts

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    setSearch(e.target.value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Fragment>
      <Flex sx={{ variant: `search` }}>
        <Button
          a11yTitle="Search here"
          icon={<SearchIcon />}
          sx={{ variant: `search.icon` }}
        />

        <Box
          className="search-box"
          sx={{
            variant: `search.box`,
            mb: [`20px`, 0],
          }}
        >
          <input
            value={value}
            type="search"
            onChange={handleChange}
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            placeholder="search here..."
            sx={{ mb: [0, 0, `15px`] }}
          />
        </Box>
        {value.length > 0 && (
          <Button
            a11yTitle="Reset Search"
            icon={<FormClose />}
            color="white"
            sx={{
              p: 0,
              svg: {
                stroke: `searchColor`,
                ml: `-12px`,
                mb: [`xxs`, `xs`, `xs`],
              },
            }}
            onClick={() => {
              setValue('')
              setSearch('')
            }}
          />
        )}
      </Flex>
      {search && <SearchQuery search={search} />}
    </Fragment>
  )
}

export default SearchForm
