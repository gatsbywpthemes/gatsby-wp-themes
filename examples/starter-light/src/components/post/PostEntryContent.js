import React from "react"
import { ParsedContent, ActivatePostScripts } from "../../utils"
import { gutenbergStyles } from "baseStyles/gutenbergStyles"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt

  return (
    <div {...props} css={{ ...gutenbergStyles }}>
      <ActivatePostScripts />
      <ParsedContent content={content} />
    </div>
  )
}
