import React from "react"
import { ParsedContent, ActivatePostScripts } from "~/utils"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt

  return (
    <div className="leading-relaxed content post-content" {...props}>
      <ActivatePostScripts />
      <ParsedContent content={content} />
    </div>
  )
}
