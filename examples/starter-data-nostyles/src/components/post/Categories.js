import React from 'react'
import { TaxonomyItem } from './index'

export const Categories = ({ post, ...props }) => {
  const categories = post.categories.nodes
  return (
    <div {...props}>
      {categories.length > 0 && (
        <div>{categories.length > 1 ? 'Categories: ' : 'Category: '}</div>
      )}
      {categories.map((cat) => (
        <TaxonomyItem taxName="category" item={cat} key={cat.slug} />
      ))}
    </div>
  )
}
