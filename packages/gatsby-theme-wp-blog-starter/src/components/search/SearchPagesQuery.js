/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useState } from 'react'
import { Button } from 'grommet'
import { useQuery, gql } from '@apollo/client'
import { SearchResults } from './index'
import Loader from 'react-spinners/BeatLoader'

const GET_PAGES = gql`
  fragment PageFields on Page {
    title
    slug
    uri
  }
  ##the after variable is the endCursor, we set it up as "", as default value, then it will change if there is next page in the result query, the search in the query value (value in the state)
  query($after: String = "", $search: String!) {
    pages(first: 100, after: $after, where: { search: $search }) {
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

  if (loading)
    return (
      <Flex sx={{ justifyContent: 'center', alignItems: 'center', py: 20 }}>
        <Loader color="#798EA3" />
      </Flex>
    )
  if (error) return <p>Error - {error.message}</p>
  //loadMore()
  return (
    <SearchResults type="Pages" query={search} posts={data.pages.nodes}>
      {clickable && data.pages.pageInfo && data.pages.pageInfo.hasNextPage && (
        <Button onClick={loadMore} focusIndicator={false} type="button">
          Load More
        </Button>
      )}
    </SearchResults>
  )
}
