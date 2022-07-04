import React from "react";
import { Heading } from "./ui-components";
import { ParsedContent } from "./utils/ParsedContent";

export const HeadlineContent = ({
  headline,
  content,
  headlineTag,
  className,
  ...props
}) => {
  return (
    <div className={`intro ${className ? className : ""}`} {...props}>
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
    </div>
  );
};
