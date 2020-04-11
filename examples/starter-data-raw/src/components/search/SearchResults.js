/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import normalize from 'normalize-path'

const Stats = ({ postType, query }) => (
  <Box className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${query}`}
  </Box>
)

const SearchResults = ({ query, pages, posts }) => {
  const showResults =
    query && query.length > 0 ? { display: `block` } : { display: `none` }
  return (
    <Box
      className="search-results"
      sx={{
        ...showResults,
      }}
    >
      <header>
        <Styled.h3>Pages</Styled.h3>
        <Stats postType={pages} query={query} />
      </header>
      <Box className="results">
        {pages.map(page => (
          <Box key={page.uri}>
            <Styled.h4>
              <Link to={`/${page.uri}`}>{page.title}</Link>
            </Styled.h4>
          </Box>
        ))}
      </Box>
      <header>
        <Styled.h3>Posts</Styled.h3>
        <Stats postType={posts} query={query} />
      </header>
      <Box className="results">
        {posts.map(post => {
          return (
            <Box key={post.slug}>
              <Styled.h4>
                <Link to={normalize(`/${post.uri}`)}>{post.title}</Link>
              </Styled.h4>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default SearchResults
