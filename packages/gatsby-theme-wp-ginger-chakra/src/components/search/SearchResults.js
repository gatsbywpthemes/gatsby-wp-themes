import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { chakra, Flex, Box } from '@chakra-ui/react'
import { SearchContext } from '../../../context'

const Stats = ({ postType, search }) => (
  <div className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </div>
)

export const SearchResults = ({ type, posts, search, children }) => {
  const { setFromSearch } = useContext(SearchContext)
  return (
    <Box className="search-results" borderBottom="3px solid" mt="6">
      <Flex as="header" align="center" justify="space-between" mb="4">
        <chakra.h3 fontSize="xl" mb="0">
          {type}
        </chakra.h3>
        <Stats postType={posts} search={search} />
      </Flex>
      {!!posts.length && (
        <chakra.ul
          textStyle="listRaw"
          mb="4"
          letterSpacing=".5px"
          fontSize="md"
        >
          {posts.map((post) => {
            return (
              <chakra.li key={post.slug} mb="2">
                <Link
                  onClick={() => setFromSearch(true)}
                  to={post.uri}
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </chakra.li>
            )
          })}
        </chakra.ul>
      )}
      {children}
    </Box>
  )
}
