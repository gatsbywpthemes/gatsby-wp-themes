import React from "react"
import { graphql } from "gatsby"
import { Heading, Button } from "./ui-components"
import { SubscribeForm } from "./SubscribeForm"

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
  const hasSubscribe = cssClass.includes("subscribe")

  return (
    <section
      className={`content-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
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
        {hasSubscribe && (
          <div className="subscribe-container">
            <SubscribeForm />
          </div>
        )}
        {button && (
          <div className="btn-container">
            <Button className="button" button={button} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Contentblock
