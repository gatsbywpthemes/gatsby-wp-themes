/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { useState, Fragment } from 'react'
import { useStaticQuery } from 'gatsby'
import { Button } from 'grommet'
import { Search as SearchIcon, FormClose } from 'grommet-icons'
import SearchResults from './SearchResults'

const POSTS_AND_PAGES_QUERY = graphql`
  query PostsAndPages {
    wp {
      posts {
        nodes {
          title
          content
          slug
        }
      }
      pages {
        nodes {
          title
          content
          slug
        }
      }
    }
  }
`

const SearchForm = () => {
  const [value, setValue] = useState('')
  const [postsResults, setPostsResults] = useState([])
  const [pagesResults, setPagesResults] = useState([])

  const data = useStaticQuery(POSTS_AND_PAGES_QUERY)
  const posts = data.wp.posts.nodes
  const pages = data.wp.pages.nodes
  const normaLizeQuery = query =>
    query
      .toLowerCase()
      .replace(/[^\w ]/g, '')
      .replace(/\s+/g, ' ')

  const handleChange = e => {
    setValue(e.target.value)
    const query = normaLizeQuery(e.target.value)

    const postsResults = posts.filter(
      post =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
    )
    const pagesResults = pages.filter(
      page =>
        page.title.toLowerCase().includes(query) ||
        page.content.toLowerCase().includes(query)
    )

    return setPostsResults(postsResults), setPagesResults(pagesResults)
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
            onChange={handleChange}
            placeholder="search here..."
          />
        </Box>
        {value.length > 0 && (
          <Button
            a11yTitle="Reset Search"
            icon={<FormClose />}
            color="white"
            sx={{
              p: 0,
              svg: { stroke: `searchColor`, ml: `-12px`, mb: [`xxs`, 0, 0] },
            }}
            onClick={() => setValue('')}
          />
        )}
      </Flex>
      {value !== '' && (
        <SearchResults
          query={value}
          pages={pagesResults}
          posts={postsResults}
        />
      )}
    </Fragment>
  )
}

export default SearchForm
