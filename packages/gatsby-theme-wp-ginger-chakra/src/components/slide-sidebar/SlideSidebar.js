import React, { useState, useEffect, useRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import {
  Button,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Menu, SlideSidebarOverlay, CloseButton } from './../index'
import { WidgetsList } from './../widgets'
import { SearchForm } from './../search'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { slideMenuStyles, menuButtonStyles } from '../../styles/'

export const SlideSidebar = ({ isOpen, onOpen, onClose }) => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    addWordPressSearch,
    menuName,
  } = useThemeOptions()
  const menuBtn = useRef()

  //const { openMenuThreshold } = useThemeOptions()

  /*useEffect(() => {
    if (!openMenuThreshold || window.innerWidth < parseInt(openMenuThreshold)) {
      setOpenClass(false)
    }
  }, [openMenuThreshold])*/

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
                <SearchForm setEscInSearch={setEscInSearch} />
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
/*
            direction="column"
            bg={bgColor}
            color={color}
            position="fixed"
            top="0"
            bottom="0"
            right="0"
            zIndex="100"
            overflowY="scroll"
            w={(theme) => ['100%', theme.sizes.sidebar]}
            transform={
              openClass ? 'translate3d(0%, 0, 0)' : 'translate3d(100%, 0, 0)'
            }
            visibility={openClass ? 'visible' : 'hidden'}
            transition={
              openClass
                ? 'transform 1s, visibility 0s 0s'
                : 'transform 1s, visibility 0s 1s'
            }
            boxShadow={['none', '-10px 0 40px rgba(0,0,0,0.3)']}
            px={[8, 12]}
            py="12"
            */
