import React from 'react'
import { Link } from 'gatsby'

const Stats = ({ postType, search }) => (
  <div className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </div>
)

export const SearchResults = ({ type, posts, search, children }) => {
  return (
    <>
      <header>
        <h3>{type}</h3>
        <Stats postType={posts} search={search} />
      </header>
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
    </>
  )
}
