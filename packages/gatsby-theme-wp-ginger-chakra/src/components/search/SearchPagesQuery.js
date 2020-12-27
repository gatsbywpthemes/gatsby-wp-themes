import React from 'react'
import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { SearchResults, LoadMoreButton } from 'gingerThemeComponents'

const GET_PAGES = gql`
  fragment PageFields on Page {
    title
    slug
    uri
  }
  ##the after variable is the endCursor, we set it up as "", as default value, then it will change if there is next page in the result query, the search in the query value (value in the state)
  query($after: String = "", $search: String!) {
    pages(first: 10, after: $after, where: { search: $search }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...PageFields
      }
    }
  }
`

export const SearchPagesQuery = ({ search }) => {
  const [clickable, setClickable] = useState(true)
  const { data, loading, error, fetchMore } = useQuery(GET_PAGES, {
    variables: { search },
  })
  const loadMore = () => {
    setClickable(false)
    if (data.pages.pageInfo && data.pages.pageInfo.hasNextPage) {
      const after = data.pages.pageInfo.endCursor
      fetchMore({
        variables: { after: after },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          setClickable(true)
          return {
            pages: {
              pageInfo: {
                hasNextPage: fetchMoreResult.pages.pageInfo.hasNextPage,
                endCursor: fetchMoreResult.pages.pageInfo.endCursor,
                __typename: previousResult.pages.pageInfo.__typename,
              },
              nodes: [
                ...previousResult.pages.nodes,
                ...fetchMoreResult.pages.nodes,
              ],
              __typename: previousResult.pages.__typename,
            },
          }
        },
      })
    }
  }

  if (loading) return <p>Searching pages...</p>
  if (error) return <p>Error - {error.message}</p>
  //loadMore()
  return (
    <SearchResults type="Pages" search={search} posts={data.pages.nodes}>
      {clickable && data.pages.pageInfo && data.pages.pageInfo.hasNextPage && (
        <LoadMoreButton loadMore={loadMore} />
      )}
      {!clickable && data.posts.pageInfo && data.pages.pageInfo.hasNextPage && (
        <p>Loading...</p>
      )}
    </SearchResults>
  )
}
