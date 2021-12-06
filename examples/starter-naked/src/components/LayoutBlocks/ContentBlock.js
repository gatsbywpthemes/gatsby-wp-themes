import React from "react"
import { graphql } from "gatsby"
export const fragment = graphql`
  fragment contentBlock on WpPage_Layoutblocks_Blocks_ContentBlock {
    ...blockSettings
    headline
    text
    image {
      id
    }
    ...button
  }
`
const Contentblock = ({
  cssClass,
  anchorId,
  adminTitle,
  headline,
  text,
  button,
  image,
  className = null,
  ...props
}) => {
  return (
    <section className={`${cssClass} ${className}`} {...props}>
      <div className="center-container">
        <div className="center-container">
          <h2 dangerouslySetInnerHTML={{ __html: headline }} />
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </section>
  )
}

export default Contentblock
