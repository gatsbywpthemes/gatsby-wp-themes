import React from 'react'

import { Widgets } from './widgets'
import { SearchForm } from './search'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

export const Sidebar = (props) => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    addWordPressSearch,
  } = useThemeOptions()

  return (
    <div {...props}>
      {addWordPressSearch && <SearchForm />}

      {!!widgets &&
        widgets.map((widget) => (
          <Widgets key={widget} widget={widget} location="SlideMenu" />
        ))}
    </div>
  )
}
