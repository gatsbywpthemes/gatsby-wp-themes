/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { results as searchstyles } from '../../styles/search'

const Stats = ({ postType, search }) => (
  <div className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </div>
)

export const SearchResults = ({ type, posts, search, children }) => {
  return (
    <div className="search-results" sx={searchstyles}>
      <header>
        <h3>{type}</h3>
        <Stats postType={posts} search={search} />
      </header>
      <ul className="results">
        {posts.map(post => {
          return (
            <li key={post.slug}>
              <Link
                to={post.uri}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </li>
          )
        })}
      </ul>
      {children}
    </div>
  )
}
