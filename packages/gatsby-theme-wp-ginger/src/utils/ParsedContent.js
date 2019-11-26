import React from 'react'
import ContentParser from 'gatsby-plugin-wordpress-parser'
import { cf7ParserFunction } from 'gatsby-plugin-wpcf7'

const ParsedContent = ({ content }) => {
  return <ContentParser content={content} customFn={[cf7ParserFunction]} />
}

export default ParsedContent
