import React from "react"
import { Link } from "gatsby"
const Stats = ({ postType, search }) => (
  <div className="text-sm italic stats text-ultraLight">
    {postType.length > 0
      ? `${postType.length} results`
      : `no results for ${search}`}
  </div>
)

export const SearchResults = ({ type, posts, search, children, ...props }) => {
  return (
    <div {...props}>
      <header className="py-3 bg-searchResultsHeaderBg dark:bg-dark-searchResultsHeaderBg text-searchResultsHeaderColor dark:text-dark-searchResultsHeaderColor">
        <h3 className="text-xl">{type}</h3>
        <Stats postType={posts} search={search} />
      </header>
      <div className="results">
        {posts.map((post) => {
          return (
            <div
              className="py-3 border-b border-gray-500 border-dashed last:border-none"
              key={post.slug}
            >
              <h4>
                <Link
                  className="hover:text-accentColor dark:hover:text-dark-accentColor"
                  to={post.uri}
                >
                  {post.title}
                </Link>
              </h4>
            </div>
          )
        })}
      </div>
      {children}
    </div>
  )
}
