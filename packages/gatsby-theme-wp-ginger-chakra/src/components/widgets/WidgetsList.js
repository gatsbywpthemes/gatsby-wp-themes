import React from 'react'
import { Widget } from 'gingerThemeComponents'

export const WidgetsList = ({ widgets }) => {
  return (
    Array.isArray(widgets) &&
    widgets.map((widget) => <Widget key={widget} widget={widget} />)
  )
}
