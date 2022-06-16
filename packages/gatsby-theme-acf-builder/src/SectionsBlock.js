import React from "react";
import { graphql } from "gatsby";
import { Heading, Button } from "./ui-components";
import { SubscribeForm } from "./SubscribeForm";

export const fragment = graphql`
  fragment sectionsBlock on WpPage_Layoutblocks_Blocks_SectionsBlock {
    cssClass
    anchorId
    sections {
      cssClass
      headline
      headlineTag
      content
      button {
        ...button
      }
    }
  }
`;

export const SectionsBlock = ({ cssClass, anchorId, sections, ...props }) => {
  return (
    <div
      className={`sections-block ${cssClass ? cssClass : ""}`}
      id={`${anchorId ? anchorId : ""}`}
      {...props}
    >
      {sections?.map((section, index) => {
        const { headline, content, headlineTag, button, cssClass } = section;
        const hasSubscribe = cssClass?.includes("subscribe");

        return (
          <section key={index} className={`${cssClass ? cssClass : ""}`}>
            {headline && (
              <Heading
                tag={headlineTag}
                className="headline"
                dangerouslySetInnerHTML={{ __html: headline }}
              />
            )}
            {content && (
              <p
                className="content-text"
                dangerouslySetInnerHTML={{ __html: content }}
              />
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
          </section>
        );
      })}
    </div>
  );
};
