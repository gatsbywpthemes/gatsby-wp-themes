/** @jsx jsx */
import { ThemeProvider, jsx } from 'theme-ui'
import { useState } from 'react'
import { Layer } from 'grommet'
import { FiMenu, FiX } from 'react-icons/fi'
import Menu from './Menu'
import Widgets from './widgets/Widgets'
import Search from 'gatsby-theme-algolia/src/components/Search'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const SlideSidebar = ({ theme }) => {
  const {
    widgetAreas: {
      slideMenu: { widgets },
    },
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
          sx={{
            variant: 'buttons.openMenu',
          }}
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
            <div className="search-wrapper">
              <Search indices={searchIndices} />
            </div>
            <Menu />
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
