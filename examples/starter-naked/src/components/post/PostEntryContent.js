import React from "react"
import { ParsedContent, ActivatePostScripts } from "../../utils"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt

  return (
    <div className="text-base md:text-lg" {...props}>
      <ActivatePostScripts />
      <ParsedContent content={content} />
    </div>
  )
}
