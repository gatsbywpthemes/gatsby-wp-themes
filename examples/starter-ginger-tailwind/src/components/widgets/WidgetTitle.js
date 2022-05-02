import React from "react";

export default function WidgetTitle({ children, props }) {
  return (
    <h2
      className="widget-title text-2xl text-center flex items-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
