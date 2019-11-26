/* eslint-disable no-useless-escape */
import React from "react"
import Img from "gatsby-image"

const replaceImg = domNode => {
  const fluidData =
    domNode.name === "img" && domNode.attribs["data-gts-encfluid"]
  if (!!fluidData) {
    // respects original "width" attribute
    // sets width accordingly
    let style = {}
    if (
      domNode.attribs.width &&
      !Number.isNaN(Number.parseInt(domNode.attribs.width, 10))
    ) {
      style.width = `${domNode.attribs.width}px`
    }
    return (
      <Img
        style={style}
        fluid={JSON.parse(fluidData)}
        className={domNode.attribs.class}
        alt={domNode.attribs.alt || ""}
        title={domNode.attribs.title}
      />
    )
  }
}

export default replaceImg
