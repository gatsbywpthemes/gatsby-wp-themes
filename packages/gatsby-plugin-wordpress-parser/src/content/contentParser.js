import React from "react"
import parser from "html-react-parser"
import replaceA from "./replaceA"
import replaceImg from "./replaceImg"
import useWordPressSettings from "../hooks/useWordPressSettings"

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
export default function ContentParser({ content, customFn = [] }) {
  const { wordPressUrl, uploadsUrl } = useWordPressSettings()
  if (typeof content === "undefined") {
    console.log(
      "ERROR: contentParser requires content parameter to be string but got undefined."
    )
  }

  if (typeof content !== "string") {
    return content
  }

  customFn = Array.isArray(customFn) ? customFn : []
  const replacementFunctions = customFn.concat([replaceA, replaceImg])

  const parserOptions = {
    replace: domNode => {
      const findMatch = replacementFunctions.find(fn =>
        fn(domNode, { wordPressUrl, uploadsUrl, parserOptions })
      )
      if (!!findMatch)
        return findMatch(domNode, { wordPressUrl, uploadsUrl, parserOptions })
    }
  }

  return <>{parser(content, parserOptions)}</>
}
