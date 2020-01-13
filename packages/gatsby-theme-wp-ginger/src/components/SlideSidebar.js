/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Layer } from 'grommet'
import { FiMenu, FiX } from 'react-icons/fi'
import Menu from './Menu'
import Widgets from './widgets/Widgets'
import Search from 'gatsby-theme-algolia/src/components/Search'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import openMenuButton from '../styles/menuButton'
import { slideMenu } from '../styles/slideSidebar'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const SlideSidebar = () => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    useAlgoliaSearch,
    menuName,
  } = useThemeOptions()
  const { theme } = useThemeUI()

  const [isMenuOpen, setOpenMenu] = useState(false)
  const [openClass, setOpenClass] = useState(false)
  const openMenu = () => {
    setOpenClass(true)
    setOpenMenu(true)
  }
  const closeMenu = () => {
    setOpenClass(false)
    setTimeout(() => setOpenMenu(false), 200)
  }
  const maybeCloseMenu = () => {
    const threshold = Number(theme.breakpoints[0].split('em')) || 40
    if (typeof window !== 'undefined' && window.innerWidth < threshold * 16) {
      setOpenClass(false)
      setTimeout(() => setOpenMenu(false), 200)
    }
  }
  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        onClick={openMenu}
        className={openClass ? 'btn-menu-opened' : 'btn-menu-closing'}
        sx={openMenuButton}
      >
        <FiMenu />
      </button>
      {isMenuOpen && (
        <Layer
          className={openClass ? 'menu-opened' : 'menu-closing'}
          position="right"
          full="vertical"
          modal
          responsive={false}
          onClickOutside={closeMenu}
          onEsc={closeMenu}
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
          {useAlgoliaSearch && (
            <div className="search-wrapper">
              <Search indices={searchIndices} />
            </div>
          )}

          <Menu menuName={menuName} hashClickAction={maybeCloseMenu} />
          {!!widgets &&
            widgets.map(widget => (
              <Widgets key={widget} widget={widget} location="SlideMenu" />
            ))}
        </Layer>
      )}
    </>
  )
}

export default SlideSidebar
