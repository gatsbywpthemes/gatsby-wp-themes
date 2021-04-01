import React from "react"
import { SearchPostsQuery, SearchPagesQuery } from "baseComponents"
import { Box, useColorModeValue as colorMode } from "@chakra-ui/react"

export const SearchQueries = ({ search, ...props }) => {
  return (
    <Box
      className="search-results"
      bg={colorMode("light", "ultraDark")}
      overflow="scroll"
      position="absolute"
      left={0}
      top={{ base: "80px", lg: "93px" }}
      w={{ base: "100%", lg: "600px" }}
      sx={{ "h3,h4,.stats": { px: 5 } }}
      zIndex={2}
      {...props}
    >
      <SearchPostsQuery search={search} />
      <SearchPagesQuery search={search} />
    </Box>
  )
}
