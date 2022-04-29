import React from "react";

export default function WidgetTitle({ children, props }) {
  return (
    <h2
      className="widget-title"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
