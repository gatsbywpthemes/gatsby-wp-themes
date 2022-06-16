import React from "react";
import { graphql } from "gatsby";
import { Image } from "./ui-components";
import { HeadlineContent } from "./HeadlineContent";

export const fragment = graphql`
  fragment logosBlock on WpPage_Layoutblocks_Blocks_LogosBlock {
    cssClass
    anchorId
    headline
    headlineTag
    content
    logos {
      logo {
        ...basicImage
      }
      url
    }
  }
`;

export const LogosBlock = ({
  cssClass,
  anchorId,
  headline,
  headlineTag,
  content,
  image,
  logos,
  ...props
}) => {
  return (
    <section
      className={`logos-block ${cssClass ? cssClass : ""}`}
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
      {logos && (
        <div className="logos-container">
          {logos.map((item, index) => {
            const { logo, url } = item;
            return (
              <div className="logo" key={index}>
                {logo && <Image img={logo} className="image-container" />}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
