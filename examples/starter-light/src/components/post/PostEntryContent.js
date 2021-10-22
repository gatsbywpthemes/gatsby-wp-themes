import React from "react"
import { ActivatePostScripts } from "../../utils"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt

  return (
    <div {...props}>
      <ActivatePostScripts />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose text-text dark:text-dark-text sm:prose-lg max-w-none"
      />
    </div>
  )
}
