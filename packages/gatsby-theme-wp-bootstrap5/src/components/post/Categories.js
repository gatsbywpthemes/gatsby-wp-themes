/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
export const Categories = ({ post }) => {
  return (
    <small>
      <i>in </i>
      {post.categories.nodes
        .map((category) => (
          <Link
            className="d-inline-block text-secondary"
            key={category.name}
            to={category.uri}
            rel="category"
          >
            {category.name}
          </Link>
        ))
        .reduce((accu, elem) => {
          return accu === null ? [elem] : [...accu, ' · ', elem]
        }, null)}
    </small>
  )
}
