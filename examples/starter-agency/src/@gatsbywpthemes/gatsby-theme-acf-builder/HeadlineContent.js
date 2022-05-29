import React from "react"
import { Heading } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/ui-components"

export const HeadlineContent = ({
  headline,
  content,
  headlineTag,
  className,
  ...props
}) => {
  return (
    <div className={`intro ${className ? className : ""}`} {...props}>
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
      <div className="spacer "></div>
    </div>
  )
}
