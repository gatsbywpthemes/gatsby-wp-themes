import React from 'react'
import ContentParser from 'gatsby-plugin-wordpress-parser'
import { cf7ParserFunction } from 'gatsby-plugin-wpcf7'
import fancyBoxParserFunction from 'gatsby-plugin-wordpress-fancybox'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

const ParsedContent = ({ content }) => {
  const options = useThemeOptions()
  const parserFunctions = [cf7ParserFunction]
  if (options.addFancyBox) {
    parserFunctions.push(fancyBoxParserFunction)
  }
  // uncomment the next line to activate Mapbox
  //parserFunctions.push(mapboxParserFunction)
  return <ContentParser content={content} customFn={parserFunctions} />
}

export default ParsedContent
