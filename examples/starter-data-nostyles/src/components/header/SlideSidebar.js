import React from 'react'
import { useState } from 'react'
import { Menu as MenuIcon, Close } from 'grommet-icons'
import { Layer, Button } from 'grommet'
import { Menu } from './index'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { Widgets } from '../widgets'

export const SlideSidebar = (props) => {
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
    <div {...props}>
      <Button
        icon={<MenuIcon />}
        a11yTitle="Open navigation menu"
        onClick={openMenu}
        focusIndicator={false}
        className={openClass ? 'btn-menu-opened' : 'btn-menu-closing'}
      />
      {isMenuOpen && (
        <Layer
          position="right"
          full="vertical"
          modal
          responsive={false}
          onClickOutside={closeMenu}
          onEsc={closeMenu}
        >
          <Button
            icon={<Close />}
            a11yTitle="Close navigation menu"
            focusIndicator={false}
            className="close"
            onClick={closeMenu}
          />

          <Menu
            menuName={menuName}
            orientation="vertical"
            closeMenu={closeMenu}
          />

          {slideMenuWidgets &&
            slideMenuWidgets.length > 0 &&
            slideMenuWidgets.map((widget, i) => (
              <div className="inverse" key={i}>
                <Widgets widget={widget} location="SlideMenu" />
              </div>
            ))}
        </Layer>
      )}
    </div>
  )
}
