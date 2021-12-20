import React, { useState } from "react"
import { graphql } from "gatsby"
import { Heading } from "./ui-components"
import Collapsible from "@kunukn/react-collapse"
import {
  ChevronDownIcon as ChevronDown,
  ChevronRightIcon as ChevronRight,
} from "@heroicons/react/outline"

export const fragment = graphql`
  fragment accordionBlock on WpPage_Layoutblocks_Blocks_AccordionBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    accordionItems {
      headline
      content
    }
  }
`

const AccordionBlock = ({
  cssClass,
  anchorId,
  content,
  headline,
  headlineTag,
  accordionItems,
  ...props
}) => {
  return (
    <section
      className={`accordion-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      {(headline || content) && (
        <div className="content-container">
          {headline && (
            <Heading
              tag={headlineTag}
              dangerouslySetInnerHTML={{ __html: headline }}
              className="headline"
            />
          )}
          {content && (
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="content"
            />
          )}
        </div>
      )}
      {accordionItems && (
        <div>
          {accordionItems.map((item, index) => {
            return (
              <div key={index}>
                <div className="accordion-item">
                  <h3
                    dangerouslySetInnerHTML={{ __html: item.headline }}
                    className="question"
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: item.content }}
                    className="answer"
                  />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default AccordionBlock
