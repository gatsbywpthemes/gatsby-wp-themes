import React from 'react'
import { Widget } from 'gingerThemeComponents'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const WidgetsList = () => {
  const { widgetAreas } = useThemeOptions()
  const widgets = widgetAreas.slideMenuWidgets || []
  return (
    Array.isArray(widgets) &&
    widgets.map((widget) => <Widget key={widget} widget={widget} />)
  )
}
