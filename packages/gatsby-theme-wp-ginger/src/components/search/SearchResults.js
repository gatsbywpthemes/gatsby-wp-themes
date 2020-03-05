/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Box, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import normalize from 'normalize-path'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

const Stats = ({ postType, search }) => (
  <Box className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </Box>
)

const SearchResults = ({ type, posts, search, children }) => {
  const { postsPrefix } = useThemeOptions()
  return (
    <Box
      className="search-results"
      sx={{
        variant: `search.results`,
      }}
    >
      <header>
        <h3>{type}</h3>
        <Stats postType={posts} search={search} />
      </header>
      <Box className="results">
        {posts.map(post => {
          return (
            <Box key={post.slug}>
              <Link
                to={
                  type === 'Posts'
                    ? normalize(`/${postsPrefix}/${post.uri}`)
                    : `/${post.uri}`
                }
              >
                {post.title}
              </Link>
            </Box>
          )
        })}
      </Box>
      {children}
    </Box>
  )
}

export default SearchResults
