import React from "react"
import { graphql } from "gatsby"
import { Heading } from "./Heading"

export const fragment = graphql`
  fragment contentBlock on WpPage_Layoutblocks_Blocks_ContentBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    button {
      ...button
    }
  }
`

const Contentblock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  button,
  ...props
}) => {
  return (
    <section
      className={`${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      <div className="center-container">
        {headline && (
          <Heading
            tag={headlineTag}
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        )}
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    </section>
  )
}

export default Contentblock
