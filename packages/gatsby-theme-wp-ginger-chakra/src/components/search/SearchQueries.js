import React from 'react'
import { SearchPostsQuery, SearchPagesQuery } from 'gingerThemeComponents'
import { Box } from '@chakra-ui/react'

export const SearchQueries = () => {
  return (
    <Box className="search-results" mb="6">
      <SearchPostsQuery />
      <SearchPagesQuery />
    </Box>
  )
}
