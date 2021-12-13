import { useState, useContext } from "react"
import { useQuery, gql } from "@apollo/client"
import { SearchContext } from "./context"
import uniqueBy from "lodash.uniqby"

export const useSearchQuery = (contentType = "PAGE") => {
  const [clickable, setClickable] = useState(true)
  const search = useContext(SearchContext)
  const GET_RESULTS = gql`
    fragment PageFields on ${contentType === "PAGE" ? `Page` : `Post`} {
      title
      slug
      uri
    }
    
    query(
      $after: String = ""
      $search: String!
      $contentType: [ContentTypeEnum] = PAGE
    ) {
      contentNodes(
        first: 10
        after: $after
        where: { contentTypes: $contentType, search: $search }
      ) {
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

  const { data, loading, error, fetchMore } = useQuery(GET_RESULTS, {
    variables: { search, contentType },
  })
  const loadMore = () => {
    setClickable(false)
    if (data.contentNodes.pageInfo?.hasNextPage) {
      const after = data.contentNodes.pageInfo.endCursor
      fetchMore({
        variables: { after: after },
        updateQuery: (previousResult, all) => {
          const { fetchMoreResult } = all
          setClickable(true)
          return {
            contentNodes: {
              pageInfo: {
                hasNextPage: fetchMoreResult.contentNodes.pageInfo.hasNextPage,
                endCursor: fetchMoreResult.contentNodes.pageInfo.endCursor,
                __typename: previousResult.contentNodes.pageInfo.__typename,
              },
              nodes: uniqueBy(
                [
                  ...previousResult.contentNodes.nodes,
                  ...fetchMoreResult.contentNodes.nodes,
                ],
                "slug"
              ),
              __typename: previousResult.contentNodes.__typename,
            },
          }
        },
      })
    }
  }
  return {
    loading,
    error,
    posts: data?.contentNodes.nodes,
    hasNextPage: data?.contentNodes.pageInfo?.hasNextPage,
    clickable,
    loadMore,
  }
}
