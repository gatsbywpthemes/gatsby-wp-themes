/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Box } from 'theme-ui'
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
    <Fragment>
      <header>
        <h3>{type}</h3>
        <Stats postType={posts} search={search} />
      </header>
      <Box className="results">
        {posts.map(post => {
          return (
            <Box key={post.slug}>
              <h4>
                <Link
                  to={
                    type === 'Posts'
                      ? normalize(`/${postsPrefix}/${post.uri}`)
                      : `/${post.uri}`
                  }
                >
                  {post.title}
                </Link>
              </h4>
            </Box>
          )
        })}
      </Box>
      {children}
    </Fragment>
  )
}

export default SearchResults
