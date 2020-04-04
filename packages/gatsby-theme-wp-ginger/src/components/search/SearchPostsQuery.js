/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import { Button } from 'grommet'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import SearchResults from './SearchResults'

const GET_POSTS = gql`
  fragment PostFields on Post {
    title
    slug
    uri
  }
  ##the after variable is the endCursor, we set it up as "", as default value, then it will change if there is next page in the result query, the search in the query value (value in the state)
  query($after: String = "", $search: String!) {
    posts(first: 2, after: $after, where: { search: $search }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...PostFields
      }
    }
  }
`

const SearchQuery = ({ search }) => {
  const [clickable, setClickable] = useState(true)
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { search },
  })
  const loadMore = () => {
    setClickable(false)
    console.log(data)
    if (data.posts.pageInfo.hasNextPage) {
      const after = data.posts.pageInfo.endCursor
      console.log(after)
      fetchMore({
        variables: { after: after },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          console.log('pf', previousResult, fetchMoreResult)
          setClickable(true)
          return {
            posts: {
              pageInfo: {
                hasNextPage: fetchMoreResult.posts.pageInfo.hasNextPage,
                endCursor: fetchMoreResult.posts.pageInfo.endCursor,
                __typename: previousResult.posts.pageInfo.__typename,
              },
              nodes: [
                ...previousResult.posts.nodes,
                ...fetchMoreResult.posts.nodes,
              ],
              __typename: previousResult.posts.__typename,
            },
          }
        },
      })
    }
  }

  if (loading) return <p>Searching posts...</p>
  if (error) return <p>Error - {error.message}</p>
  //loadMore()
  return (
    <SearchResults type="Posts" search={search} posts={data.posts.nodes}>
      {clickable && data.posts.pageInfo.hasNextPage && (
        <Button onClick={loadMore} type="button">
          Load More
        </Button>
      )}
      {!clickable && data.posts.pageInfo.hasNextPage && <p>Loading...</p>}
    </SearchResults>
  )
}

export default SearchQuery