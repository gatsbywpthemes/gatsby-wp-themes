/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Box, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import normalize from 'normalize-path'
import { results as searchstyles } from '../../styles/search'

const Stats = ({ postType, search }) => (
  <Box className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </Box>
)

const SearchResults = ({ type, posts, search, children }) => {
  return (
    <Box className="search-results" sx={searchstyles}>
      <header>
        <h3>{type}</h3>
        <Stats postType={posts} search={search} />
      </header>
      <ul className="results">
        {posts.map(post => {
          return (
            <li key={post.slug}>
              <Link
                to={normalize(`/${post.uri}`)}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </li>
          )
        })}
      </ul>
      {children}
    </Box>
  )
}

export default SearchResults
