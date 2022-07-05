import React from "react";
import { Heading, Button, Image } from "./ui-components";
import { SubscribeForm } from "./SubscribeForm";
import { HeadlineContent } from "./HeadlineContent";
import { ParsedContent } from "./utils/ParsedContent";

export const SectionsBlock = ({
  cssClass,
  anchorId,
  sections,
  headline,
  headlineTag,
  content,
  ...props
}) => {
  return (
    <section
      className={`sections-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      {(headline || content) && (
        <HeadlineContent
          headline={headline}
          content={content}
          headlineTag={headlineTag}
        />
      )}
      <div className="sections-container">
        {sections?.map((section, index) => {
          const { headline, content, headlineTag, button, cssClass, image } =
            section;
          const hasSubscribe = cssClass?.includes("subscribe");

          return (
            <section
              key={index}
              className={`section-item ${cssClass ? cssClass : ""}`}
            >
              <div className="section-text">
                {headline && (
                  <Heading
                    tag={headlineTag}
                    className="headline"
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
              {image && <Image img={image} className="section-image" />}
            </section>
          );
        })}
      </div>
    </section>
  );
};
