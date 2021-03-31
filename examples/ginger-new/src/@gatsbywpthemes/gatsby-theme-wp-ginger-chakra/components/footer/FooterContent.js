import React from "react"
import { Box } from "@chakra-ui/react"
import { useSiteSettings } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const FooterContent = () => {
  const siteSettings = useSiteSettings()
  return (
    <Box
      sx={{
        a: {
          color: "inherit",
          fontWeight: "bold",
          textDecoration: "none",
        },
        "a:hover": {
          opacity: 0.6,
          color: "inherit",
        },
      }}
    >
      <div>
        © {new Date().getFullYear()} {siteSettings.title}
      </div>
      {` `}
      <div>
        Built with{` `}
        <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
        <a href="https://www.gatsbyjs.org">Hello Gatsby</a>
      </div>
    </Box>
  )
}
