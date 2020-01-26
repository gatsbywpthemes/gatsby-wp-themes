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
      posts(first: 1000) {
        nodes {
          title
          content
          slug
        }
      }
      pages(first: 1000) {
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
        (post.title && post.title.toLowerCase().includes(query)) ||
        (post.content && post.content.toLowerCase().includes(query))
    )
    const pagesResults = pages.filter(
      page =>
        (page.title && page.title.toLowerCase().includes(query)) ||
        (page.content && page.content.toLowerCase().includes(query))
    )

    return setPostsResults(postsResults), setPagesResults(pagesResults)
  }

  return (
    <Fragment>
      <Flex>
        <Button a11yTitle="Search here" icon={<SearchIcon />} />

        <Box className="search-box">
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
