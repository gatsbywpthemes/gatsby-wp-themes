import React from "react"
import parser from "html-react-parser"
import replaceA from "./replaceA"
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
  const replacementFunctions = customFn.concat([replaceA])

  const firstFind = (d, args, array, index = 0) => {
    if (index < array.length - 1) {
      return array[index](d, args) || firstFind(d, args, array, index + 1)
    }
    return array[index](d, args)
  }

  const parserOptions = {
    replace: (domNode) => {
      return firstFind(
        domNode,
        { wordPressUrl, uploadsUrl, parserOptions },
        replacementFunctions
      )
    },
  }

  return <>{parser(content, parserOptions)}</>
}