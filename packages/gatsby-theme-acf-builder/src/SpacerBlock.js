import React from "react";
import { graphql } from "gatsby";

export const fragment = graphql`
  fragment spacerBlock on WpPage_Layoutblocks_Blocks_SpacerBlock {
    cssClass
  }
`;

export const SpacerBlock = ({
  cssClass,

  ...props
}) => {
  return (
    <div className={`spacer-block ${cssClass ? cssClass : ""}`} {...props}>
      <div className="spacer"></div>
    </div>
  );
};
