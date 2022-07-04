import React from "react";
import { Heading, Button } from "./ui-components";
import { SubscribeForm } from "./SubscribeForm";
import { ParsedContent } from "./utils/ParsedContent";

export const ContentBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  button,
  ...props
}) => {
  const hasSubscribe = cssClass?.includes("subscribe");

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
          <div className="btn-container">
            <Button className="button" button={button} />
          </div>
        )}
      </div>
    </section>
  );
};
