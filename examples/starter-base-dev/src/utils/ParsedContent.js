import React from 'react'
import ContentParser from '@gatsbywpthemes/gatsby-plugin-wordpress-parser'
import { cf7ParserFunction } from '@gatsbywpthemes/gatsby-plugin-wpcf7'
import { lightboxParserFunction } from '@gatsbywpthemes/gatsby-plugin-wordpress-lightbox'

const ParsedContent = ({ content }) => {
  const parserFunctions = [cf7ParserFunction, lightboxParserFunction]
  return <ContentParser content={content} customFn={parserFunctions} />
}

export default ParsedContent
