import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { SearchContext } from './context'

export const SearchResults = ({ posts }) => {
  return (
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
  )
}
