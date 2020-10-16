import React from "react"
import { domToReact } from "html-react-parser"
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

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

export const lightboxParserFunction = (node, { parserOptions }) => {
  const parserOptionsInner = {
    replace: domNode => {
      if (domNode.name === "a") {
        if (
          domNode.attribs &&
          /\.(jpg|jpeg|gif|png|svg)$/.test(domNode.attribs.href)
        ) {
          return (
            <a aria-label="Open image in a lightbox gallery" data-attribute="SRL" {...domNode.attribs}>
              {domToReact(domNode.children, parserOptions)}
            </a>
          )
        } else {
          return <>{domToReact(domNode.children, parserOptions)}</>
        }
      }
    }
  }
  if (
    node.name &&
    node.attribs &&
    node.attribs.class &&
    node.attribs.class.indexOf("wp-block-gallery") > -1 &&
    findInnerA(node)
  ) {
    const Tag = node.name
    return (
      <>
        <SimpleReactLightbox>
          <SRLWrapper options={{
            buttons: {
              showDownloadButton: false
            }
          }}>
            <Tag className={node.attribs.class}>
              {domToReact(node.children, parserOptionsInner)}
            </Tag>
          </SRLWrapper>
        </SimpleReactLightbox>
      </>
    )
  }
}


