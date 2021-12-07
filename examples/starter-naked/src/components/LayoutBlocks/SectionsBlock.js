import React from "react"
import { graphql } from "gatsby"
import { Heading } from "./Heading"

export const fragment = graphql`
  fragment sectionsBlock on WpPage_Layoutblocks_Blocks_SectionsBlock {
    cssClass
    anchorId
    sections {
      cssClass
      headline
      headlineTag
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
        const { headline, content, headlineTag, image, button } = section
        return (
          <section
            key={index}
            className={`${section.cssClass ? section.cssClass : ""}`}
          >
            {headline && (
              <Heading
                tag={headlineTag}
                className="headline"
                dangerouslySetInnerHTML={{ __html: headline }}
              />
            )}
            {content && (
              <p
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </section>
        )
      })}
    </div>
  )
}

export default SectionsBlock
