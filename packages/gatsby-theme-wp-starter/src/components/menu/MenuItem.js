import React from 'react'
import { SubMenu, MenuLink } from 'starterComponents'

export const MenuItem = ({ menuItem }) => {
  if (menuItem.children.length) {
    return <SubMenu menuItem={menuItem} />
  } else {
    return (
      <li className={`menu-item ${menuItem.cssClasses}`} key={menuItem.id}>
        <MenuLink menuItem={menuItem} />
      </li>
    )
  }
}
