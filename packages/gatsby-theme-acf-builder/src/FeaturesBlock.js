import React from "react"
import { graphql } from "gatsby"
import { Heading, Button, Image } from "./ui-components"

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
      image {
        ...basicImage
      }
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
              className="content-text"
            />
          )}
        </div>
      )}

      {features && (
        <div className="features-container">
          {features.map((feature, index) => {
            return (
              <div className="feature" key={index}>
                {feature.image && <Image img={feature.image} />}
                <Heading
                  tag={feature.headlineTag}
                  dangerouslySetInnerHTML={{ __html: feature.headline }}
                  className="headline"
                />
                <div
                  dangerouslySetInnerHTML={{ __html: feature.content }}
                  className="content-text"
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
