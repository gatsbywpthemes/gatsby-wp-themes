import React from "react"
import ParsedContent from "baseUtils/ParsedContent"
import { gutenbergStyles } from "baseStyles/gutenbergStyles"
import { css } from "twin.macro"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt

  return (
    <div
      css={{ ...gutenbergStyles }}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  )
}
