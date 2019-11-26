import React from "react"
import parser from "html-react-parser"
import cf7ParserFunction from "./cf7ParserFunction"

/**
 * swaps external URLs in <a> and <img> elements if they were downloaded and are available locally
 * returns React elements
 * @param  {string} content             post content
 * @param  {string} wordPressUrl        wordpress uploads url
 * @param  {string} uploadsUrl          wordpress site url
 * @return {React}                      React elements
 *
 * contentParser(content, pluginOptions)
 */
export function ContentParserCF7({ content }) {
  if (typeof content === "undefined") {
    console.log(
      "ERROR: contentParser requires content parameter to be string but got undefined."
    )
  }

  if (typeof content !== "string") {
    return content
  }

  const parserOptions = {
    replace: domNode => {
      return cf7ParserFunction(domNode)
    }
  }

  return <>{parser(content, parserOptions)}</>
}
