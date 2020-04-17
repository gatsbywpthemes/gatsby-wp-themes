/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
const Categories = ({ post }) => {
  return (
    <>
      <span>in </span>
      {post.categories.nodes
        .map(category => (
          <Link
            sx={{ variant: 'special.underlineOnHover' }}
            key={category.name}
            to={`/${category.uri}`}
            rel="category"
          >
            {category.name}
          </Link>
        ))
        .reduce((accu, elem) => {
          return accu === null ? [elem] : [...accu, ' · ', elem]
        }, null)}
    </>
  )
}

export default Categories
