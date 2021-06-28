import React from 'react'
import { SubMenu, LinkItem } from 'gingerThemeComponents'

export const MenuItem = ({ menuItem }) => {
  if (menuItem.children.length) {
    return <SubMenu menuItem={menuItem} />
  } else {
    return (
      <li key={menuItem.id}>
        <LinkItem menuItem={menuItem} />
      </li>
    )
  }
}
