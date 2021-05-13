import React from 'react'
import {
  Menu,
  WidgetsList,
  SearchForm,
  SlideSidebarWrapper,
} from 'gingerThemeComponents'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const SlideSidebar = ({ isOpen, onOpen, onClose }) => {
  const { addWordPressSearch } = useThemeOptions()
  return (
    <SlideSidebarWrapper isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      {addWordPressSearch && <SearchForm />}
      <Menu />
      <WidgetsList />
    </SlideSidebarWrapper>
  )
}
