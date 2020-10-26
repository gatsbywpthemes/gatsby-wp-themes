import React from "react"
import parser from "html-react-parser"

export default function ContentParser({ content, customFn = [] }) {

  if (typeof content === "undefined") {
    console.log(
      "ERROR: contentParser requires content parameter to be string but got undefined."
    )
  }

  if (typeof content !== "string") {
    return content
  }

  customFn = Array.isArray(customFn) ? customFn : []

  const replacementFunctions = customFn.concat([])

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
        { parserOptions },
        replacementFunctions
      )
    },
  }

  return <>{parser(content, parserOptions)}</>
}