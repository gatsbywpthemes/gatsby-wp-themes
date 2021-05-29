import React from "react"
import { Center, Button, Box, useColorModeValue } from "@chakra-ui/react"
import { SearchResults } from "baseComponents"
import Loader from "react-spinners/BeatLoader"
import { useSearchQuery } from "./useSearchQuery"

export const SearchPostsQuery = ({ search }) => {
  const { loading, error, hasNextPage, clickable, loadMore, posts } =
    useSearchQuery(search, "POST")
  const color = useColorModeValue("accent", "modes.dark.accent")
  if (loading)
    return (
      <Center height="100px">
        <Box as={Loader} display="block" color={color} />
      </Center>
    )
  if (error) return <p>Error - {error.message}</p>

  return (
    <SearchResults type="Posts" search={search} posts={posts}>
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
