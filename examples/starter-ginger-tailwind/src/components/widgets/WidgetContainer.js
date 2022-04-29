import React from "react";
import WidgetTitle from "./WidgetTitle";

export default function WidgetContainer({ children, title, sx, ...props }) {
  return (
    <section className="widget" {...props}>
      {title && <WidgetTitle>{title}</WidgetTitle>}
      {children}
    </section>
  );
}
