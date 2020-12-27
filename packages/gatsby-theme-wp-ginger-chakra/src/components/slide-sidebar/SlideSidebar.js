import React, { useState, useRef, useContext } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useThemeColorModeValue as useColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'
import {
  Menu,
  WidgetsList,
  SearchForm,
  OpenButton,
} from 'gingerThemeComponents'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { SearchContext } from '../../../context'

export const SlideSidebar = ({ isOpen, onOpen, onClose }) => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    addWordPressSearch,
    menuName,
  } = useThemeOptions()
  const menuBtn = useRef()
  const { search, setSearch } = useContext(SearchContext)
  const [escInSearch, setEscInSearch] = useState(false)
  return (
    <>
      <OpenButton ref={menuBtn} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={menuBtn}
        size="md"
        closeOnEsc={false}
        onEsc={() => {
          if (!escInSearch) {
            onClose()
          } else {
            setSearch('')
          }
        }}
      >
        <DrawerOverlay>
          <DrawerContent
            bg={useColorModeValue('sidebarBg')}
            color={useColorModeValue('sidebarColor')}
            sx={{ boxShadow: 'rgba(0, 0, 0, 0.3) -10px 0px 40px' }}
          >
            <DrawerCloseButton sx={{ right: 6 }} />
            <DrawerBody px={[8, 12]} py="12">
              {addWordPressSearch && (
                <SearchForm
                  search={search}
                  setSearch={setSearch}
                  setEscInSearch={setEscInSearch}
                />
              )}
              <Menu menuName={menuName} />
              <WidgetsList widgets={widgets} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
