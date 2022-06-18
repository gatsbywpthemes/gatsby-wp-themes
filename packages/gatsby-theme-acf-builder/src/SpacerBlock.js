import React from "react";

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
