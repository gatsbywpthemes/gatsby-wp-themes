import React from "react";
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
import Widget from "./Widget";
export default function WidgetsList() {
  const { widgetAreas } = useThemeOptions();
  const widgets = widgetAreas.slideMenuWidgets || [];
  return (
    Array.isArray(widgets) &&
    widgets.map((widget) => <Widget key={widget} widget={widget} />)
  );
}
