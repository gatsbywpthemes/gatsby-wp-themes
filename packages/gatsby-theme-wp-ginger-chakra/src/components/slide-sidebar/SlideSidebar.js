import React, { useState, useEffect, useRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { Menu, SlideSidebarOverlay, CloseButton } from './../index'
import { WidgetsList } from './../widgets'
import { SearchForm } from './../search'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { slideMenuStyles, menuButtonStyles } from '../../styles/'

export const SlideSidebar = ({ open, setOpen }) => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    addWordPressSearch,
    menuName,
  } = useThemeOptions()
  const bgColor = useColorModeValue('sidebarBg', 'modes.dark.sidebarBg')
  const color = useColorModeValue('sidebarColor', 'modes.dark.sidebarColor')
  const menuBtn = useRef()

  const [openClass, setOpenClass] = useState(false)
  const { openMenuThreshold } = useThemeOptions()

  useEffect(() => {
    if (!openMenuThreshold || window.innerWidth < parseInt(openMenuThreshold)) {
      setOpenClass(false)
    }
  }, [openMenuThreshold])

  const openMenu = () => {
    setOpen(true)
    setTimeout(() => setOpenClass(true), 0)
  }
  const closeMenu = () => {
    setOpenClass(false)
  }

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (!(e.target.type === 'search' && e.target.value) && e.keyCode === 27) {
        setOpenClass(false)
        menuBtn.current.focus()
      }
    }
    if (openClass) {
      document.body.classList.add('opened')
      document.addEventListener('keydown', closeOnEsc)
    } else {
      document.body.classList.remove('opened')
      document.removeEventListener('keydown', closeOnEsc)
    }
    return () => {
      document.removeEventListener('keydown', closeOnEsc)
    }
  }, [openClass, setOpenClass])

  return (
    <>
      <Button
        ref={menuBtn}
        aria-label="Open navigation menu"
        onClick={openMenu}
        sx={menuButtonStyles}
        className={openClass ? 'btn-menu-opened' : 'btn-menu-closing'}
      >
        <FiMenu />
      </Button>
      {open && (
        <>
          <Flex
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
          >
            <CloseButton closeMenu={closeMenu} />
            {addWordPressSearch && <SearchForm />}
            <Menu menuName={menuName} />
            <WidgetsList widgets={widgets} />
          </Flex>
          {openClass && <SlideSidebarOverlay closeMenu={closeMenu} />}
        </>
      )}
    </>
  )
}
