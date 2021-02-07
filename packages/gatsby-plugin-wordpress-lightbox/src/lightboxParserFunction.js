import React from "react"
import { domToReact, attributesToProps } from "html-react-parser"

const ClientSideOnlyLazy = React.lazy(() =>
  import(/* webpackChunkName: "LightboxWrapper" */ "./LightboxWrapper")
)
const findInnerA = (node) => {
  let value = null
  if (node && node.name === "a") {
    return true
  }

  if (node.children) {
    node.children.some((child) => (value = findInnerA(child)))
  }
  return value
}

export const lightboxParserFunction = (node, { parserOptions }) => {
  const parserOptionsInA = (href) => ({
    replace: (domNode) => {
      if (domNode.name === "img" && !domNode.attribs["aria-hidden"]) {
        const props = attributesToProps(domNode.attribs)
        const { srcSet, style } = props
        const { srcset, ...attribs } = domNode.attribs
        return (
          <a aria-label="Open image in a lightbox gallery" href={href}>
            <img alt="" {...attribs} style={style} srcSet={srcSet} />
          </a>
        )
      }
    },
  })
  const parserPlainGalleryOptions = {
    replace: (domNode) => {
      if (
        (domNode.name === "ul" ||
          domNode.name === "li" ||
          domNode.name === "figure") &&
        domNode.children
      ) {
        return <>{domToReact(domNode.children, parserPlainGalleryOptions)}</>
      }
      if (domNode.name === "figcaption") {
        return <></>
      }
    },
  }
  const parserOptionsInner = {
    replace: (domNode) => {
      if (domNode.name === "a") {
        if (
          domNode.attribs &&
          /\.(jpg|jpeg|gif|png|svg)$/.test(domNode.attribs.href)
        ) {
          return (
            <>
              {domToReact(
                domNode.children,
                parserOptionsInA(domNode.attribs.href)
              )}
            </>
          )
        } else {
          return <>{domToReact(domNode.children, parserOptions)}</>
        }
      } else if (domNode.name === "figcaption") {
        return <></>
      } else if (domNode.children) {
        return <>{domToReact(domNode.children, parserOptionsInner)}</>
      }
    },
  }
  const isSSR = typeof window === "undefined"
  if (
    !isSSR &&
    node.name &&
    node.attribs &&
    node.attribs.class &&
    node.attribs.class.indexOf("wp-block-gallery") > -1
  ) {
    if (findInnerA(node)) {
      return (
        <React.Suspense
          fallback={
            <div data-parsed-gallery className={node.attribs.class}>
              {domToReact(node.children, parserOptionsInner)}
            </div>
          }
        >
          <ClientSideOnlyLazy>
            <div data-parsed-gallery className={node.attribs.class}>
              {domToReact(node.children, parserOptionsInner)}
            </div>
          </ClientSideOnlyLazy>
        </React.Suspense>
      )
    } else {
      return (
        <div data-parsed-gallery className={node.attribs.class}>
          {domToReact(node.children, parserPlainGalleryOptions)}
        </div>
      )
    }
  }
}
