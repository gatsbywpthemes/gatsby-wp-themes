import React from "react"
import { graphql } from "gatsby"
import { Heading, Button } from "./ui-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const fragment = graphql`
  fragment coverBlock on WpPage_Layoutblocks_Blocks_CoverBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    image {
      ...GatsbyImageQuery_starter
    }
    button {
      ...button
    }
  }
`

const Coverblock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  button,
  image,
  ...props
}) => {
  return (
    <section
      className={`cover-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      <GatsbyImage
        loading="lazy"
        alt={image.altText}
        image={image.localFile.childImageSharp.gatsbyImageData}
        className="image-container"
        imgClassName="cover-image"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="overlay">
        {headline && (
          <Heading
            className="headline"
            tag={headlineTag}
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        )}
        {content && (
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="content-text"
          />
        )}
        {button && (
          <div className="button-container">
            <Button button={button} className="button" />
          </div>
        )}
      </div>
    </section>
  )
}

export default Coverblock
