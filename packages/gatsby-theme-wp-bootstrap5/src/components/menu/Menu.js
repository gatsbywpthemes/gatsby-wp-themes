import React from 'react'
import { useMenuItems } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { useCollapse } from '../ui-components/useCollapse'
import { SubMenu } from './SubMenu'
import { MenuItem } from './MenuItem'
import { ToggleButton } from './ToggleButton'

export const Menu = ({ location = 'PRIMARY' }) => {
  const menuItems = useMenuItems(location)
  const [showClass, handler] = useCollapse()
  return (
    menuItems && (
      <nav
        className="navbar navbar-expand-lg text-left text-uppercase border sticky-top bg-light"
        aria-label="main"
      >
        <div className="container">
          <ToggleButton handler={handler} />
          <div className={`collapse navbar-collapse ${showClass}`}>
            <ul className="navbar-nav">
              {menuItems.map((menuItem) => {
                if (menuItem.children.length) {
                  return <SubMenu key={menuItem.id} menuItem={menuItem} />
                } else {
                  return <MenuItem key={menuItem.id} menuItem={menuItem} />
                }
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  )
}
