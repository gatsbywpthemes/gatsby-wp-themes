// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
export const Categories = ({ className, post }) => {
  return (
    <div className={className}>
      <small>in </small>
      {post.categories.nodes
        .map((category) => (
          <Link
            className="d-inline-block text-decoration-none text-white meta-data text-uppercase badge bg-secondary"
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
    </div>
  )
}
