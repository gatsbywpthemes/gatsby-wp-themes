import React from "react"
import { ParsedContent, ActivatePostScripts } from "../../utils"
import { Comments } from "@gatsbywpthemes/gatsby-theme-wp-comments/src"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt

  return (
    <div className="text-base md:text-lg" {...props}>
      <ActivatePostScripts />
      <ParsedContent content={content} />
      {location === "single" && <Comments post={post} />}
    </div>
  )
}
