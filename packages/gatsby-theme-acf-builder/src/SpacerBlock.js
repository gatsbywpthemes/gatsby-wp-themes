import React from "react";
import { graphql } from "gatsby";

export const fragment = graphql`
  fragment spacerBlock on WpPage_Layoutblocks_Blocks_SpacerBlock {
    cssClass
  }
`;

const Contentblock = ({
  cssClass,

  ...props
}) => {
  return (
    <div className={`spacer-block ${cssClass ? cssClass : ""}`} {...props}>
      <div className="spacer"></div>
    </div>
  );
};

export default Contentblock;
