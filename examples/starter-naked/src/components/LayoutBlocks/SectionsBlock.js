import React from "react"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment sectionsBlock on WpPage_Layoutblocks_Blocks_SectionsBlock {
    cssClass
    anchorId
    sections {
      cssClass
      headline
      content
      button {
        ...button
      }
    }
  }
`

const SectionsBlock = ({ cssClass, anchorId, sections, ...props }) => {
  console.log("sections", sections)
  return (
    <div
      className={`${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      {sections?.map((section, index) => {
        return (
          <section
            key={index}
            className={`${section.className ? section.className : ""}`}
          >
            <h3 dangerouslySetInnerHTML={{ __html: section.headline }} />
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        )
      })}
    </div>
  )
}

export default SectionsBlock
