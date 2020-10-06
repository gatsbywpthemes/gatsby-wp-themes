/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Box } from 'theme-ui'
import { Link } from 'gatsby'

const Stats = ({ postType, search }) => (
  <Box className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </Box>
)

export const SearchResults = ({ type, posts, search, children }) => {
  return (
    <Fragment>
      <header>
        <h3>{type}</h3>
        <Stats postType={posts} search={search} />
      </header>
      <Box className="results">
        {posts.map((post) => {
          return (
            <Box key={post.slug}>
              <h4>
                <Link to={post.uri}>{post.title}</Link>
              </h4>
            </Box>
          )
        })}
      </Box>
      {children}
    </Fragment>
  )
}
