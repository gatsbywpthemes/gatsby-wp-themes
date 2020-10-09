import React from 'react'
import { TaxonomyItem } from './index'

export const Categories = ({ post, ...props }) => {
  const categories = post.categories.nodes
  return (
    categories.length > 0 && (
      <>
        <h3>{categories.length > 1 ? 'Categories: ' : 'Category: '}</h3>
        <ul {...props}>
          {categories.map((cat) => (
            <li key={cat.slug}>
              <TaxonomyItem taxName="category" item={cat} />
            </li>
          ))}
        </ul>
      </>
    )
  )
}
