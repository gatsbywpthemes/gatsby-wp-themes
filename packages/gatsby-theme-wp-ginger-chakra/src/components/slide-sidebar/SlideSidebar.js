import React, { useRef, useContext } from 'react'

import {
  Menu,
  WidgetsList,
  SearchForm,
  SlideSidebarWrapper,
} from 'gingerThemeComponents'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { SearchContext } from 'gingerThemeComponents/search/context'

export const SlideSidebar = ({ isOpen, onOpen, onClose }) => {
  const { addWordPressSearch, widgetAreas } = useThemeOptions()

  return (
    <SlideSidebarWrapper isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      {addWordPressSearch && <SearchForm />}
      <Menu />
      <WidgetsList />
    </SlideSidebarWrapper>
  )
}
