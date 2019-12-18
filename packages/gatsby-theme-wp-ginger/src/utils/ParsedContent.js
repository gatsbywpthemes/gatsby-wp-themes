import React from 'react'
import ContentParser from 'gatsby-plugin-wordpress-parser'
import { cf7ParserFunction } from 'gatsby-plugin-wpcf7'
import fancyBoxParserFunction from '../components/fancybox/fancyBoxParserFunction'

const ParsedContent = ({ content }) => {
  return (
    <ContentParser
      content={content}
      customFn={[cf7ParserFunction, fancyBoxParserFunction]}
    />
  )
}

export default ParsedContent
