import React from 'react'
import { Widgets, SearchForm } from '../index'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Sidebar = ({ className = '', ...props }) => {
  const { addWordPressSearch, widgetAreas } = useThemeOptions()
  console.log(widgetAreas)
  const widgets = widgetAreas.sidebarWidgets || []
  return (
    <div className={`${className} col-md-6 col-lg-3`} {...props}>
      {addWordPressSearch && <SearchForm />}
      {!!widgets &&
        widgets.map((widget) => (
          <Widgets key={widget} widget={widget} location="SlideMenu" />
        ))}
    </div>
  )
}
