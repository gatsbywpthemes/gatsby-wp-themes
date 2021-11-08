import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Heading,
  chakra,
  Link as ChakraLink,
  useColorModeValue as colorMode,
} from "@chakra-ui/react"

const Stats = ({ postType, search }) => (
  <Box className="stats" fontStyle="italic" fontSize="sm" color="ultraLight">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </Box>
)

export const SearchResults = ({ type, posts, search, children, ...props }) => {
  return (
    <Box {...props}>
      <chakra.header
        py={3}
        bg={colorMode(
          "searchResultsHeaderBg",
          "modes.dark.searchResultsHeaderBg"
        )}
        color={colorMode(
          "searchResultsHeaderColor",
          "modes.dark.searchResultsHeaderColor"
        )}
      >
        <Heading as="h3" fontSize="xl">
          {type}
        </Heading>
        <Stats postType={posts} search={search} />
      </chakra.header>
      <Box className="results">
        {posts.map((post) => {
          return (
            <Box
              key={post.slug}
              py={3}
              borderBottom="1px dashed"
              borderColor="gray.500"
              sx={{ "&:last-of-type": { borderBottom: "none" } }}
            >
              <chakra.h4>
                <ChakraLink
                  as={Link}
                  _hover={{
                    color: colorMode("accent", "modes.dark.accent"),
                  }}
                  to={post.uri}
                >
                  {post.title}
                </ChakraLink>
              </chakra.h4>
            </Box>
          )
        })}
      </Box>
      {children}
    </Box>
  )
}
