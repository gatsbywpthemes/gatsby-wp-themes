import React from "react"
import { graphql } from "gatsby"
import { Heading, Button } from "./ui-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const fragment = graphql`
  fragment featuresBlock on WpPage_Layoutblocks_Blocks_FeaturesBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    features {
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

const FeaturesBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  features,
  ...props
}) => {
  return (
    <section
      className={`features-block ${cssClass ? cssClass : ""}`}
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

      {features && (
        <div className="features-container">
          {features.map((feature, index) => {
            return (
              <div className="feature" key={index}>
                <Heading
                  tag={feature.headlineTag}
                  dangerouslySetInnerHTML={{ __html: feature.headline }}
                  className="headline"
                />
                <div
                  dangerouslySetInnerHTML={{ __html: feature.content }}
                  className="content"
                />
                {feature.button && (
                  <div className="btn-container">
                    <Button className="button" button={feature.button} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default FeaturesBlock
