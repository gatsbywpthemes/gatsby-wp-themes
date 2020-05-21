/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Menu } from './index'
import { Widgets } from './widgets'
import { SearchForm } from './search'
import SearchFormAlgolia from 'gatsby-theme-algolia/src/components/Search'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { slideMenuStyles, overlayStyles, menuButtonStyles } from '../styles'
import { resultsAlgoliaStyles } from '../styles'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

export const SlideSidebar = ({ open, updateOpen, openClass, setOpenClass }) => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    addWordPressSearch,
    addAlgoliaSearch,
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
    const closeOnEsc = e => {
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
        sx={menuButtonStyles}
      >
        <FiMenu />
      </button>
      {open && (
        <>
          <div
            className={openClass ? 'menu-opened' : 'menu-closing'}
            sx={slideMenuStyles}
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
            {addAlgoliaSearch && (
              <div sx={resultsAlgoliaStyles}>
                {' '}
                <SearchFormAlgolia indices={searchIndices} />
              </div>
            )}
            {addWordPressSearch && <SearchForm />}

            <Menu menuName={menuName} />
            {!!widgets &&
              widgets.map(widget => (
                <Widgets key={widget} widget={widget} location="SlideMenu" />
              ))}
          </div>
          <button
            type="button"
            className="menu-overlay"
            sx={overlayStyles}
            onClick={closeMenu}
          />
        </>
      )}
    </>
  )
}
