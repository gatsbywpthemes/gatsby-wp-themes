import React from 'react'
import { Widget } from './Widget'

export const WidgetsList = ({ widgets }) => {
  return (
    !!widgets &&
    widgets.map((widget) => <Widget key={widget} widget={widget} />)
  )
}
