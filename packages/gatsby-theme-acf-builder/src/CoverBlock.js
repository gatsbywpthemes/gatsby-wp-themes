import React from "react";
import { graphql } from "gatsby";
import { Heading, Button, Image } from "./ui-components";

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

const CoverBlock = ({
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
      <Image
        loading="eager"
        alt={image?.altText}
        img={image}
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

export default CoverBlock;
