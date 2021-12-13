import React from "react"
import { Link } from "gatsby"

export const SearchResults = ({ posts }) => {
  return (
    !!posts.length && (
      <ul>
        {posts.map((post) => {
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
    )
  )
}
