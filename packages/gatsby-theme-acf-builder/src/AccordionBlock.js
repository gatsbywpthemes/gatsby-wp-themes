import React, { useState } from "react"
import { graphql } from "gatsby"
import { Heading } from "./ui-components"
import Collapsible from "@kunukn/react-collapse"
import {
  ChevronRightIcon as ClosedIcon,
  ChevronDownIcon as OpenIcon,
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
              className="content-text"
            />
          )}
        </div>
      )}
      {accordionItems && (
        <div className="accordion">
          {accordionItems.map((item, index) => {
            const [open, setOpen] = useState(false)
            return (
              <div className="accordion-item" key={index}>
                <button
                  aria-label="Open item"
                  onClick={() => setOpen(!open)}
                  className="accordion-trigger"
                >
                  <h3
                    dangerouslySetInnerHTML={{ __html: item.headline }}
                    className="headline"
                  />
                  {open ? (
                    <OpenIcon className="accordion-icon open" />
                  ) : (
                    <ClosedIcon className="accordion-icon closed" />
                  )}
                </button>
                <Collapsible className="accordion-collapse" isOpen={open}>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.content }}
                    className="content-text"
                  />
                </Collapsible>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default AccordionBlock
