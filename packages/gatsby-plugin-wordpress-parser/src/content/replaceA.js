/* eslint-disable no-useless-escape */
import React from "react"
import { Link } from "gatsby"
import { domToReact } from "html-react-parser"
import URIParser from "urijs"
import normalize from "normalize-path"

const checkUrl = (elementUrl, wordPressUrl, uploadsUrl) => {
  let urlParsed = new URIParser(elementUrl)
  // handling relative url
  if (urlParsed.is("relative")) {
    urlParsed = urlParsed.absoluteTo(wordPressUrl)
    elementUrl = urlParsed.href()
  }

  // removes protocol to handle mixed content in a page
  const elementUrlNoProtocol = elementUrl.replace(/^https?:/i, "")
  const uploadsUrlNoProtocol = uploadsUrl.replace(/^https?:/i, "")
  const wordPressUrlNoProtocol = wordPressUrl.replace(/^https?:/i, "")

  if (
    elementUrlNoProtocol.includes(wordPressUrlNoProtocol) &&
    !elementUrlNoProtocol.includes(uploadsUrlNoProtocol)
  ) {
    let url = urlParsed.path()
    const wordPressUrlParsed = new URIParser(wordPressUrl)
    // fix if WordPress is installed in subdirectory
    url = url.replace(wordPressUrlParsed.path(), "/")
    return normalize(`/${url}`)
  }
  return false
}

const replaceA = (domNode, { wordPressUrl, uploadsUrl, parserOptions }) => {
  const elementUrl = domNode.name === "a" && domNode.attribs.href
  if (!elementUrl) {
    return false
  }
  // check if it's an internal link, links to uploads dir are excluded
  const url = checkUrl(elementUrl, wordPressUrl, uploadsUrl)
  return (
    !!url && (
      <Link to={url} className={domNode.attribs.class}>
        {domToReact(domNode.children, parserOptions)}
      </Link>
    )
  )
}

export default replaceA
