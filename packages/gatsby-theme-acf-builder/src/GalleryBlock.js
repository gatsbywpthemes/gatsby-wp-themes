import React from "react";
import { graphql } from "gatsby";
import { Image } from "./ui-components";
import { HeadlineContent } from "./HeadlineContent";
import LightboxWrapper from "./LightboxWrapper";

export const fragment = graphql`
  fragment galleryBlock on WpPage_Layoutblocks_Blocks_GalleryBlock {
    cssClass
    anchorId
    content
    headline
    headlineTag
    gallery {
      ...basicImage
    }
  }
`;

const GalleryBlock = ({
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
              const { caption, description } = img;
              return (
                <div className="gallery-item-container">
                  <Image
                    key={index}
                    img={img}
                    className="gallery-item"
                    imgClassName="img"
                  />
                  {caption && (
                    <div
                      className="caption"
                      dangerouslySetInnerHTML={{ __html: caption }}
                    />
                  )}
                  {description && (
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
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

export default GalleryBlock;
