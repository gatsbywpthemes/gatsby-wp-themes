import React from "react"
import { Box } from "@chakra-ui/react"
import ParsedContent from "starterUtils/ParsedContent"
import { gutenbergStyles } from "starterStyles/gutenbergStyles"

import { ActivatePostScripts } from "starterUtils"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt
  const attributes = location === "single" ? { id: "content" } : {}
  return (
    <Box {...attributes} {...props} sx={{ ...gutenbergStyles }}>
      <Box className="entry-content">
        <ActivatePostScripts />
        <ParsedContent content={content} />
      </Box>
    </Box>
  )
}
