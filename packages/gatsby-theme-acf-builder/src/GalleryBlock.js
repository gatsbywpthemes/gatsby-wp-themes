import React from "react";
import { Image } from "./ui-components";
import { HeadlineContent } from "./HeadlineContent";
import LightboxWrapper from "./LightboxWrapper";

export const GalleryBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  gallery,
  ...props
}) => {
  return (
    <section
      className={`gallery-block ${cssClass ? cssClass : ""}`}
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
      {gallery && (
        <div className="gallery-items">
          <LightboxWrapper>
            {gallery.map((img, index) => {
              const { altText } = img;
              console.log(img);
              return (
                <div className="gallery-item-container">
                  <Image
                    key={index}
                    img={img}
                    className="gallery-item"
                    imgClassName="img"
                  />
                  {altText && (
                    <div className="image-overlay">
                      {altText && (
                        <div
                          className="alt-text"
                          dangerouslySetInnerHTML={{ __html: altText }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </LightboxWrapper>
        </div>
      )}
    </section>
  );
};
