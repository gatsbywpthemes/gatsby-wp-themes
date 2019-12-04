/** @jsx jsx */
import { ThemeProvider, useThemeUI, jsx } from 'theme-ui'
import { useState } from 'react'
import { Layer } from 'grommet'
import { FiMenu, FiX } from 'react-icons/fi'
import Menu from './Menu'
import Widgets from './widgets/Widgets'
import Search from 'gatsby-theme-algolia/src/components/Search'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import openMenuButton from '../styles/menuButton'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const SlideSidebar = () => {
  const theme = useThemeUI()
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
    useAlgoliaSearch,
    menuName,
  } = useThemeOptions()
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
  return (
    <ThemeProvider theme={theme}>
      <div>
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
            sx={{ variant: [`layer.slideMenu`], color: 'white' }}
          >
            <button
              aria-label="Close navigation menu"
              sx={{
                variant: 'buttons.raw',
                color: 'white',
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

            <Menu menuName={menuName} />
            {!!widgets &&
              widgets.map(widget => (
                <Widgets key={widget} widget={widget} location="SlideMenu" />
              ))}
          </Layer>
        )}
      </div>
    </ThemeProvider>
  )
}

export default SlideSidebar
