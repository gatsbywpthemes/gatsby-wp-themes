import React from "react";
import { graphql } from "gatsby";
import { Image } from "./ui-components";
import { HeadlineContent } from "./HeadlineContent";

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
      className={`content-block ${cssClass ? cssClass : ""}`}
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
        <div>
          {gallery.map((img, index) => {
            const { altText, caption, description, sourceUrl, localFile } = img;
            return <Image key={index} img={img} />;
          })}
        </div>
      )}
    </section>
  );
};

export default GalleryBlock;
