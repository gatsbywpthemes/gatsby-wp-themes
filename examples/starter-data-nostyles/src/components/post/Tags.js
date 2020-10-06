import React from 'react'
import { TaxonomyItem } from './index'

export const Tags = ({ post, ...props }) => {
  const tags = post.tags.nodes
  return (
    <div {...props}>
      {tags.length > 0 && <div>{tags.length > 1 ? 'Tags: ' : 'Tag: '}</div>}
      {tags.map((tag) => (
        <TaxonomyItem taxName="tag" item={tag} key={tag.slug} />
      ))}
    </div>
  )
}
