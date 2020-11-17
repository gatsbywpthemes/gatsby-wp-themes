import React from 'react'
import { Link } from 'gatsby'

const Stats = ({ postType, search }) => (
  <small className="stats">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </small>
)

export const SearchResults = ({ type, posts, search, children }) => {
  return (
    <div className="search-results  border-bottom border-dark mb-4">
      <header className="d-flex justify-content-between align-items-center">
        <h3 className="h5">{type}</h3>
        <Stats postType={posts} search={search} />
      </header>
      <ul className="results list-group list-group-flush">
        {posts.map((post) => {
          return (
            <li className="list-group-item px-0" key={post.slug}>
              <Link
                className="text-reset text-decoration-none heading-font"
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
