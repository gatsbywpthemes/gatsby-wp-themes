import React from "react"
import parser from "html-react-parser"
import cf7ParserFunction from "./cf7ParserFunction"

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
    replace: (domNode) => {
      return cf7ParserFunction(domNode)
    },
  }

  return <>{parser(content, parserOptions)}</>
}
