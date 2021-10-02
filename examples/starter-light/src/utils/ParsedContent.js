import React from "react"
import ContentParser from "@gatsbywpthemes/gatsby-plugin-wordpress-parser"

const ParsedContent = ({ content }) => {
  return <ContentParser content={content} />
}

export default ParsedContent
