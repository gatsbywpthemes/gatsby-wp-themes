import React, { useRef, useContext } from 'react'
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
import { SearchContext } from 'gingerThemeComponents/search/context'

export const SlideSidebar = ({ isOpen, onOpen, onClose }) => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    addWordPressSearch,
  } = useThemeOptions()
  const menuBtn = useRef()
  const { setSearch, escInSearch } = useContext(SearchContext)

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
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.3) -10px 0px 40px',
              '[aria-current]': {
                fontStyle: 'italic',
                fontWeight: 'body',
              },
            }}
          >
            <DrawerCloseButton sx={{ right: 6 }} />
            <DrawerBody px={[8, 12]} py="12">
              {addWordPressSearch && <SearchForm />}
              <Menu />
              <WidgetsList widgets={widgets} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
