import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { SearchResults } from './index'

const GET_POSTS = gql`
  fragment PostFields on Post {
    title
    slug
    uri
  }
  ##the after variable is the endCursor, we set it up as "", as default value, then it will change if there is next page in the result query, the search in the query value (value in the state)
  query($after: String = "", $search: String!) {
    posts(first: 10, after: $after, where: { search: $search }) {
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

export const SearchPostsQuery = ({ search }) => {
  const [clickable, setClickable] = useState(true)
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { search },
  })
  const loadMore = () => {
    setClickable(false)
    if (data.posts.pageInfo && data.posts.pageInfo.hasNextPage) {
      const after = data.posts.pageInfo.endCursor
      fetchMore({
        variables: { after: after },
        updateQuery: (previousResult, { fetchMoreResult }) => {
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
      {clickable && data.posts.pageInfo && data.posts.pageInfo.hasNextPage && (
        <button onClick={loadMore} type="button">
          Load More
        </button>
      )}
      {!clickable && data.posts.pageInfo && data.posts.pageInfo.hasNextPage && (
        <p>Loading...</p>
      )}
    </SearchResults>
  )
}
