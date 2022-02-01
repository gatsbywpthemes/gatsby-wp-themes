import React from 'react'
import { Box } from '@chakra-ui/react'

export const SearchResultsWrapper = ({ children }) => {
  return (
    <Box className="search-results" mb="6">
      {children}
    </Box>
  )
}
