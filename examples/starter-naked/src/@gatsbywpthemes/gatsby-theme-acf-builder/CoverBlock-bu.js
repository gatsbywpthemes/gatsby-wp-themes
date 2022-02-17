import React from "react"
import { graphql } from "gatsby"
import {
  Heading,
  Button,
} from "@gatsbywpthemes/gatsby-theme-acf-builder/src/ui-components"
import { GatsbyImage } from "gatsby-plugin-image"
import clsx from "clsx"

export const fragment = graphql`
  fragment coverBlock2 on WpPage_Layoutblocks_Blocks_CoverBlock {
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
        alt={image.altText}
        image={image.localFile.childImageSharp.gatsbyImageData}
        className="w-full h-[400px]"
        objectFit="cover"
        objectPosition="center"
      />
      <div
        className={clsx(
          `absolute inset-0`,
          `bg-[rgba(0,0,0,.4)] `,
          `flex items-center justify-center`
        )}
      >
        <div className="text-center">
          {headline && (
            <Heading
              className="text-2xl uppercase"
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
      </div>
    </section>
  )
}

export default Coverblock
