import React from 'react'
import ContentParser from 'gatsby-plugin-wordpress-parser'
// import { cf7ParserFunction } from 'gatsby-plugin-wpcf7'
import { lightboxParserFunction } from 'gatsby-plugin-wordpress-lightbox'

const ParsedContent = ({ content }) => {
  const parserFunctions = [lightboxParserFunction]
  return <ContentParser content={content} customFn={parserFunctions} />
}

export default ParsedContent
