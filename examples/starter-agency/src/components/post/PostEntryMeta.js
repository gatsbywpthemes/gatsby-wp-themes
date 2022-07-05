import React from "react"
import { Taxonomies } from "./Taxonomies"

export const PostEntryMeta = ({ post, ...props }) => {
  return (
    <div className="entry-meta" {...props}>
      <Taxonomies post={post} taxName="categories" />
      <Taxonomies post={post} taxName="tags" />
    </div>
  )
}
