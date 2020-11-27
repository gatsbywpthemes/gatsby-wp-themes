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
    <Box className="search-results" borderBottom="3px solid">
      <Flex as="header" align="center" justify="space-between" mb="4">
        <h3>{type}</h3>
        <Stats postType={posts} search={search} />
      </Flex>
      {!!posts.length && (
        <chakra.ul textStyle="listRaw" mb="4">
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link
                  onClick={() => setFromSearch(true)}
                  to={post.uri}
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </li>
            )
          })}
        </chakra.ul>
      )}
      {children}
    </Box>
  )
}
