import React from "react";
import { Button, Image } from "./ui-components";
import { HeadlineContent } from "./HeadlineContent";

export const FeaturesBlock = ({
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
        <HeadlineContent
          headline={headline}
          content={content}
          headlineTag={headlineTag}
        />
      )}
      {features && (
        <div className="features-container">
          {features.map((feature, index) => {
            const { image, headline, headlineTag, content, button } = feature;
            return (
              <div className="feature" key={index}>
                {image && <Image img={image} className="image-container" />}

                {(headline || content) && (
                  <HeadlineContent
                    headline={headline}
                    content={content}
                    headlineTag={headlineTag}
                  />
                )}
                {button && (
                  <div className="btn-container">
                    <Button className="button" button={button} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
