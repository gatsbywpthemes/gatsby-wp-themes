import React from 'react'
import { Taxonomies } from './index'

export const PostEntryMeta = ({ post, ...props }) => {
  return (
    <div className="entry-meta" {...props}>
      <Taxonomies post={post} taxName="categories" singularName="category" />
      <Taxonomies post={post} taxName="tags" singularName="tag" />
    </div>
  )
}
