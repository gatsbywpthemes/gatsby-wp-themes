/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { useState, Fragment } from 'react'
import { useStaticQuery } from 'gatsby'
import { Button } from 'grommet'
import { Search as SearchIcon, FormClose } from 'grommet-icons'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import SearchResults from './SearchResults'

const GET_POSTS = gql`
  fragment PostFields on WP_Post {
    title
    content
    slug
    uri
  }
  ##the after variable is the endCursor, we set it up as "", as default value, then it will change if there is next page in the result query, the search in the query value (value in the state)
  query($after: String! = "", $search: String!) {
    wp {
      pageInfo {
        postsNextPage: hasNextPage
        postsEndCursor: endCursor
      }
      posts(first: 2, after: $after, where: { search: $search }) {
        nodes {
          ...PostFields
        }
      }
    }
  }
`

const SearchForm = () => {
  const [value, setValue] = useState('')
  const [postsResults, setPostsResults] = useState([])
  const [pagesResults, setPagesResults] = useState([])

  // const data = useStaticQuery(POSTS_AND_PAGES_QUERY)
  // console.log('allPostsSearch', data.wp.posts)
  // const posts = data.wp.posts.nodes
  // const pages = data.wp.pages.nodes
  // const postsData = data.wp.posts

  const normaLizeQuery = query =>
    query
      .toLowerCase()
      .replace(/[^\w ]/g, '')
      .replace(/\s+/g, ' ')

  const handleChange = e => {
    setValue(e.target.value)
    const query = normaLizeQuery(e.target.value)

    // const postsResults = posts.filter(
    //   post =>
    //     (post.title && post.title.toLowerCase().includes(query)) ||
    //     (post.content && post.content.toLowerCase().includes(query))
    // )
    // const pagesResults = pages.filter(
    //   page =>
    //     (page.title && page.title.toLowerCase().includes(query)) ||
    //     (page.content && page.content.toLowerCase().includes(query))
    // )

    // return setPostsResults(postsResults), setPagesResults(pagesResults)
  }

  const { data, loading, error, refetch } = useQuery(GET_POSTS, {
    variables: { value },
  })

  console.log('postsData', data, value)
  console.log('error', error)
  console.log(useQuery(GET_POSTS, { variables: { value } }))
  //le data est undefined et il y a une erreur. alors qu'il devrais retourner des posts quand on fait une query, et ensuite il faudrait chercher les autres pages avec conditionnel hasNextPage, et endCursor dans after

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
