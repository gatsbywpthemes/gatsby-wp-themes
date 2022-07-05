import React from "react";
import { Heading, Button, Image } from "./ui-components";
import { SubscribeForm } from "./SubscribeForm";
import { ParsedContent } from "./utils/ParsedContent";

export const CoverBlock = ({
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
            <div className="content-text">
              <ParsedContent content={content} />
            </div>
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
