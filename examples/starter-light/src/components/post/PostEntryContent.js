import React from "react"
import { ParsedContent, ActivatePostScripts } from "../../utils"
import { gutenbergStyles } from "../../styles/gutenbergStyles"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt

  return (
    <div
      {...props}
      css={{
        ...gutenbergStyles,
        "&:after": {
          clear: "both",
          content: "''",
          display: "block",
        },
      }}
    >
      <ActivatePostScripts />
      <ParsedContent content={content} />
    </div>
  )
}
