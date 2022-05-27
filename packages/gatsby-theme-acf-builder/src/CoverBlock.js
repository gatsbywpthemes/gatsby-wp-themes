import React from "react";
import { graphql } from "gatsby";
import { Heading, Button } from "./ui-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { SubscribeForm } from "./SubscribeForm";

export const fragment = graphql`
  fragment coverBlock on WpPage_Layoutblocks_Blocks_CoverBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    image {
      ...coverImage
    }
    button {
      ...button
    }
  }
`;

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
  const hasSubscribe = cssClass?.includes("subscribe");

  return (
    <section
      className={`cover-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      <GatsbyImage
        loading="lazy"
        alt={image?.altText}
        image={image?.localFile.childImageSharp.gatsbyImageData}
        className="image-container"
        imgClassName="cover-image"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="overlay">
        <div className="cover-content">
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
          {hasSubscribe && (
            <div className="subscribe-container">
              <SubscribeForm />
            </div>
          )}
          {button && (
            <div className="button-container">
              <Button button={button} className="button" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Coverblock;
