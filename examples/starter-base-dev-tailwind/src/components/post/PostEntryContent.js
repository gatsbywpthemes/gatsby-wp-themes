import React from "react"
import { Box } from "@chakra-ui/react"
import ParsedContent from "baseUtils/ParsedContent"
import { gutenbergStyles } from "baseStyles/gutenbergStyles"

import { ActivatePostScripts } from "baseUtils"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt
  const attributes = location === "single" ? { id: "content" } : {}
  return (
    <Box {...attributes} {...props} sx={{ ...gutenbergStyles }}>
      <Box
        sx={{
          "&:after": {
            clear: "both",
            content: "''",
            display: "block",
          },
        }}
      >
        <ActivatePostScripts />
        <ParsedContent content={content} />
      </Box>
    </Box>
  )
}
