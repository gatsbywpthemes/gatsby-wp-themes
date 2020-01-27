/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { Link } from 'gatsby'
import normalize from 'normalize-path'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

const Stats = ({ postType, query }) => (
  <Box className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${query}`}
  </Box>
)

const SearchResults = ({ query, pages, posts }) => {
  const { postsPrefix } = useThemeOptions()
  const showResults =
    query && query.length > 0 ? { display: `block` } : { display: `none` }
  return (
    <Box
      className="search-results"
      sx={{
        ...showResults,
        variant: `search.resultsBasic`,
      }}
    >
      <header>
        <h3>Pages</h3>
        <Stats postType={pages} query={query} />
      </header>
      <Box className="results">
        {pages.map(page => (
          <Box key={page.slug}>
            <h4>
              <Link to={`/${page.slug}`}>{page.title}</Link>
            </h4>
          </Box>
        ))}
      </Box>
      <header>
        <h3>Posts</h3>
        <Stats postType={posts} query={query} />
      </header>
      <Box className="results">
        {posts.map(post => {
          return (
            <Box key={post.slug}>
              <h4>
                <Link to={normalize(`/${postsPrefix}/${post.slug}`)}>
                  {post.title}
                </Link>
              </h4>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default SearchResults
