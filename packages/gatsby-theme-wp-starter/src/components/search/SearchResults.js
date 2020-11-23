import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  VStack,
  Heading,
  Text,
  chakra,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'

const Stats = ({ postType, search }) => (
  <div className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </div>
)

export const SearchResults = ({ type, posts, search, children, ...props }) => {
  return (
    <Box
      bg={colorMode('ultraLight', 'dark')}
      overflow="scroll"
      position="absolute"
      left={0}
      top={[65, 65, 88]}
      w={{ base: '100%', lg: '600px' }}
      zIndex={2}
      {...props}
    >
      <chakra.header>
        <Heading as="h3" bg="gray.300" textStyle="h5">
          {type}
        </Heading>
        <Stats postType={posts} search={search} />
      </chakra.header>
      <div className="results">
        {posts.map((post) => {
          return (
            <div key={post.slug}>
              <h4>
                <Link to={post.uri}>{post.title}</Link>
              </h4>
            </div>
          )
        })}
      </div>
      {children}
    </Box>
  )
}
