import React from "react"
import { Button, Box, Center } from "@chakra-ui/react"
import { SearchResults } from "baseComponents"
import Loader from "react-spinners/BeatLoader"
import { useSearchQuery } from "./useSearchQuery"

export const SearchPagesQuery = ({ search }) => {
  const {
    loading,
    error,
    hasNextPage,
    clickable,
    loadMore,
    posts,
  } = useSearchQuery(search, "PAGE")
  if (loading)
    return (
      <Center h="100px">
        <Box as={Loader} color="primary" />
      </Center>
    )
  if (error) return <p>Error - {error.message}</p>
  return (
    <SearchResults type="Pages" search={search} posts={posts}>
      {clickable && hasNextPage && (
        <Button
          onClick={loadMore}
          size="small"
          colorScheme="teal"
          type="button"
        >
          Load More
        </Button>
      )}
    </SearchResults>
  )
}
