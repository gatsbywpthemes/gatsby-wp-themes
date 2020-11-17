import React from 'react'
import { Widgets, SearchForm } from '../index'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

export const Sidebar = ({ className, ...props }) => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    addWordPressSearch,
  } = useThemeOptions()

  className = className || ''

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
