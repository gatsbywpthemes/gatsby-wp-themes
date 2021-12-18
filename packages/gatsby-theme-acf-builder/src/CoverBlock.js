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
      className={`relative aspect-video ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      <GatsbyImage
        loading="lazy"
        image={image.localFile.childImageSharp.gatsbyImageData}
        className="object-cover object-top w-full h-[300px]"
      />
      <div className="absolute w-full px-10 mx-auto text-center text-black uppercase -translate-y-1/2 top-1/2 left-10">
        {headline && (
          <Heading
            tag={headlineTag}
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        )}
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        {button && (
          <div className="flex justify-center">
            <Button button={button} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Coverblock
