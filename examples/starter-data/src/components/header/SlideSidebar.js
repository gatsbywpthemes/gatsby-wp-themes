/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { Fragment } from 'react'
import { useState } from 'react'
import { Menu as MenuIcon, Close } from 'grommet-icons'
import { Layer, Button } from 'grommet'
import Menu from './Menu.js'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Widgets from '../widgets/Widgets'
import slideSidebarStyles from '../../styles/slideSidebarStyles'

const SlideSidebar = () => {
  const [isMenuOpen, setOpenMenu] = useState(false)
  const [openClass, setOpenClass] = useState(false)
  const { slideMenuWidgets, menuName } = useThemeOptions()

  const openMenu = () => {
    setOpenClass(true)
    setOpenMenu(true)
  }
  const closeMenu = () => {
    setOpenClass(false)
    setTimeout(() => setOpenMenu(false), 200)
  }

  return (
    <Fragment>
      <Button
        icon={<MenuIcon />}
        a11yTitle="Open navigation menu"
        onClick={openMenu}
        className={openClass ? 'btn-menu-opened' : 'btn-menu-closing'}
        sx={{
          variant: `buttons.hamburger`,
        }}
      />
      {isMenuOpen && (
        <Layer
          position="right"
          full="vertical"
          modal
          responsive={false}
          onClickOutside={closeMenu}
          onEsc={closeMenu}
          sx={slideSidebarStyles}
        >
          <Button
            icon={<Close />}
            a11yTitle="Close navigation menu"
            sx={{
              pointer: `cursor`,
              svg: {
                stroke: `headerColor`,
                width: `15px`,
                height: `15px`,
              },
            }}
            className="close"
            onClick={closeMenu}
          />

          <Menu menuName={menuName} />

          {slideMenuWidgets &&
            slideMenuWidgets.length > 0 &&
            slideMenuWidgets.map((widget, i) => (
              <Box className="inverse" sx={{ mb: `l` }} key={i}>
                <Widgets widget={widget} location="SlideMenu" />
              </Box>
            ))}
        </Layer>
      )}
    </Fragment>
  )
}

export default SlideSidebar
