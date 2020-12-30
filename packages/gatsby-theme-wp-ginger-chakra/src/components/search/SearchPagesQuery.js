import React from 'react'
import { chakra, Flex, Box } from '@chakra-ui/react'
import { useSearchQuery } from './useSearchQuery'
import {
  SearchResults,
  SearchStats,
  LoadMoreButton,
} from 'gingerThemeComponents'
export const SearchPagesQuery = () => {
  const {
    loading,
    error,
    hasNextPage,
    clickable,
    loadMore,
    posts,
  } = useSearchQuery('PAGE')
  if (loading) return <p>Searching pages...</p>
  if (error) return <p>Error - {error.message}</p>
  return (
    <Box className="search-results" borderBottom="3px solid" mt="6">
      <Flex as="header" align="center" justify="space-between" mb="4">
        <chakra.h3 fontSize="xl" mb="0">
          Pages
        </chakra.h3>
        <SearchStats length={posts.length} />
      </Flex>
      <SearchResults posts={posts} />
      {hasNextPage && (
        <LoadMoreButton clickable={clickable} loadMore={loadMore} />
      )}
    </Box>
  )
}
