import React from 'react'
import { Heading, Flex, Box } from '@chakra-ui/react'
import { SearchStats } from '@gatsbywpthemes/gatsby-theme-wp-search/src/SearchStats'

export const SearchWrapperPosts = ({ children }) => {
  return (
    <Box
      as="section"
      className="search-results-posts"
      borderBottom="3px solid"
      mt="6"
    >
      <Flex as="header" align="center" justify="space-between" mb="4">
        <Heading as="h3" fontSize="xl" mb="0">
          Posts
        </Heading>
        <SearchStats type="POST" />
      </Flex>
      {children}
    </Box>
  )
}
