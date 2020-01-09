import React from "react"
import { domToReact } from "html-react-parser"

const ClientSideOnlyLazy = React.lazy(() => import("./FancyBoxWrapper"))

let counter = 0

const findInnerA = node => {
  let value = null
  if (node && node.name === "a") {
    return true
  }

  if (node.children) {
    node.children.some(child => (value = findInnerA(child)))
  }
  return value
}

const fancyBoxParserFunction = (node, { parserOptions }) => {
  const parserOptionsInner = {
    replace: domNode => {
      if (domNode.name === "a") {
        if (
          domNode.attribs &&
          /\.(jpg|jpeg|gif|png)$/.test(domNode.attribs.href)
        ) {
          return (
            <a aria-label="Open image in a lightbox" {...domNode.attribs}>
              {domToReact(domNode.children, parserOptions)}
            </a>
          )
        } else {
          return <>{domToReact(domNode.children, parserOptions)}</>
        }
      }
    }
  }
  const isSSR = typeof window === "undefined"
  if (
    node.name &&
    node.attribs &&
    node.attribs.class &&
    node.attribs.class.indexOf("wp-block-gallery") > -1 &&
    findInnerA(node)
  ) {
    counter = counter + 1
    return (
      <>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy
              classNames={node.attribs.class}
              counter={counter}
              tag={node.name}
            >
              {domToReact(node.children, parserOptionsInner)}
            </ClientSideOnlyLazy>
          </React.Suspense>
        )}
      </>
    )
  }
}

export default fancyBoxParserFunction
