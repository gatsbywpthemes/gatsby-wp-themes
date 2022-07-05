import React from "react";
import { Image } from "./ui-components";
import { HeadlineContent } from "./HeadlineContent";

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
              <WithLink url={url} key={index}>
                <div className="logo">
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
