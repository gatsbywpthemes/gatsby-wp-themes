import React from 'react'
import { SearchPostsQuery, SearchPagesQuery } from 'gingerThemeComponents'
import { Box } from '@chakra-ui/react'

export const SearchQueries = ({ search }) => {
  return (
    <Box className="search-results" mb="6">
      <SearchPostsQuery search={search} />
      <SearchPagesQuery search={search} />
    </Box>
  )
}
