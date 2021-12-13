import React, { memo } from 'react'
import { Menu, WidgetsList, SlideSidebarWrapper } from 'gingerThemeComponents'
import { SearchForm } from '@gatsbywpthemes/gatsby-theme-wp-search/src/SearchForm'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const SlideSidebar = memo(({ isOpen, onOpen, onClose }) => {
  const { addWordPressSearch } = useThemeOptions()
  return (
    <SlideSidebarWrapper isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      {addWordPressSearch && <SearchForm />}
      <Menu />
      <WidgetsList />
    </SlideSidebarWrapper>
  )
})
