import React from "react"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment contentBlock on WpPage_Layoutblocks_Blocks_ContentBlock {
    adminTitle
    cssClass
    anchorId
    headline
    content
    image {
      id
    }
    button {
      ...button
    }
  }
`
const Contentblock = ({
  cssClass,
  anchorId,
  adminTitle,
  headline,
  content,
  button,
  image,
  className,
  ...props
}) => {
  return (
    <section className={`${cssClass ? cssClass : ""}`} {...props}>
      <div className="center-container">
        <h2 dangerouslySetInnerHTML={{ __html: headline }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  )
}

export default Contentblock
