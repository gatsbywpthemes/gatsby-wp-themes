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

const WithLink = ({ url, children }) => {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  } else {
    return children;
  }
};

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
              <WithLink url={url}>
                <div className="logo" key={index}>
                  {logo && <Image img={logo} className="image-container" />}
                </div>
              </WithLink>
            );
          })}
        </div>
      )}
    </section>
  );
};