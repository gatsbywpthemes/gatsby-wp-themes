/* eslint-disable no-useless-escape */
import React from "react"
import BackgroundImage from "gatsby-background-image"
import { domToReact } from "html-react-parser"

const replaceBgImage = (
  domNode,
  { wordPressUrl, uploadsUrl, parserOptions }
) => {
  const fluidData =
    domNode.name === "div" &&
    domNode.attribs &&
    domNode.attribs["data-gts-encfluid"]
  if (!!fluidData) {
    return (
      <BackgroundImage
        Tag="div"
        fluid={JSON.parse(fluidData)}
        className={domNode.attribs.class}
      >
        {domToReact(domNode.children, parserOptions)}
      </BackgroundImage>
    )
  }
}

export default replaceBgImage
