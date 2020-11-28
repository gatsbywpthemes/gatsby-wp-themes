import React, { useState, useRef, useContext } from 'react'
import { FiMenu } from 'react-icons/fi'
import {
  Button,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { Menu } from './../index'
import { WidgetsList } from './../widgets'
import { SearchForm } from './../search'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { menuButtonStyles } from '../../styles/'
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
      <Button
        ref={menuBtn}
        aria-label="Open navigation menu"
        onClick={onOpen}
        sx={menuButtonStyles}
      >
        <FiMenu />
      </Button>

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
            bg={useColorModeValue('sidebarBg', 'modes.dark.sidebarBg')}
            color={useColorModeValue('sidebarColor', 'modes.dark.sidebarColor')}
          >
            <DrawerCloseButton />
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
