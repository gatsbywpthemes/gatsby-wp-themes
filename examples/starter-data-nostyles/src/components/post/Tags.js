import React from 'react'
import { TaxonomyItem } from './index'

export const Tags = ({ post, ...props }) => {
  const tags = post.tags.nodes
  return (
    tags.length > 0 && (
      <>
        <h3>{tags.length > 1 ? 'Tags: ' : 'Tag: '}</h3>
        <ul {...props}>
          {tags.map((tag) => (
            <li>
              <TaxonomyItem taxName="tag" item={tag} key={tag.slug} />
            </li>
          ))}
        </ul>
      </>
    )
  )
}
