import React from "react"
import { Taxonomies } from "./Taxonomies"
import { Author } from "./Author"

export const PostEntryMeta = ({ post, ...props }) => {
  return (
    <div className="entry-meta text-base tracking-widest uppercase" {...props}>
      By{" "}
      <Author
        author={post.author.node}
        className="font-bold hover:opacity-70  uppercase "
      />
      {" / "}In{" "}
      <Taxonomies
        post={post}
        showTitle={false}
        taxName="categories"
        singularName="category"
      />
      {/* <Taxonomies post={post} taxName="tags" singularName="tag" /> */}
    </div>
  )
}
