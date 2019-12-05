/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { useState, Fragment } from 'react'
import { useStaticQuery } from 'gatsby'
import { Button } from 'grommet'
import { Search as SearchIcon } from 'grommet-icons'
import SearchResults from './SearchResults'

const POSTS_AND_PAGES_QUERY = graphql`
  query PostsAndPages {
    wp {
      posts {
        nodes {
          title
          content
          slug
          date
          author {
            name
          }
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
  const [query, setQuery] = useState('')

  const data = useStaticQuery(POSTS_AND_PAGES_QUERY)
  const posts = data.wp.posts.nodes
  const pages = data.wp.pages.nodes
  const handleInput = e => {
    setValue(
      e.target.value
        .toLowerCase()
        // .trim()
        .replace(/[^\w ]/g, '')
        .replace(/\s+/g, ' ')
    )
    const query = value
      .toLowerCase()
      .trim()
      .replace(/[^\w ]/g, '')
      .replace(/\s+/g, ' ')

    const postsResults = posts.filter(post => post.title.includes(value))
    const pagesResults = pages.filter(page => page.title.includes(value))
    console.log(postsResults, pagesResults, query)

    return (
      setQuery(query),
      setPostsResults(postsResults),
      setPagesResults(pagesResults)
    )
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
          sx={{
            variant: `search.box`,
          }}
        >
          <input
            className="search-box"
            value={value}
            onChange={handleInput}
            placeholder="search here..."
          />
        </Box>
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
