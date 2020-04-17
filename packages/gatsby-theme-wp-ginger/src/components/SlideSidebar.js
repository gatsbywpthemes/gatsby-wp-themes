/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Menu from './Menu'
import Widgets from './widgets/Widgets'
import SearchForm from './search/SearchForm'
import useThemeOptions from 'gatsby-theme-blog-data-v4/src/hooks/useThemeOptions'
import openMenuButton from '../styles/menuButton'
import { slideMenu, overlay } from '../styles/slideSidebar'

const SlideSidebar = ({ open, updateOpen, openClass, setOpenClass }) => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    addWordPressSearch,
    menuName,
  } = useThemeOptions()

  const menuBtn = useRef()

  const openMenu = () => {
    updateOpen(true)
    setTimeout(() => setOpenClass(true), 10)
  }
  const closeMenu = () => {
    setOpenClass(false)
  }

  useEffect(() => {
    const closeOnEsc = (e) => {
      console.log(e)
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
      <button
        ref={menuBtn}
        type="button"
        aria-label="Open navigation menu"
        onClick={openMenu}
        className={openClass ? 'btn-menu-opened' : 'btn-menu-closing'}
        sx={openMenuButton}
      >
        <FiMenu />
      </button>
      {open && (
        <>
          <div
            className={openClass ? 'menu-opened' : 'menu-closing'}
            sx={slideMenu}
          >
            <button
              aria-label="Close navigation menu"
              sx={{
                variant: 'buttons.raw',
                color: 'sidebarColor',
              }}
              className="close"
              onClick={closeMenu}
            >
              <FiX />
            </button>

            {addWordPressSearch && <SearchForm />}

            <Menu menuName={menuName} />
            {!!widgets &&
              widgets.map((widget) => (
                <Widgets key={widget} widget={widget} location="SlideMenu" />
              ))}
          </div>
          <button
            type="button"
            className="menu-overlay"
            sx={overlay}
            onClick={closeMenu}
          />
        </>
      )}
    </>
  )
}

export default SlideSidebar
