import React from 'react'
import { SubMenu } from './SubMenu'
import { LinkItem } from './LinkItem'

export const MenuItem = ({ menuItem, sub }) => {
  if (menuItem.children.length) {
    return <SubMenu menuItem={menuItem} sub={true} />
  } else {
    return (
      <li className={`nav-item ${menuItem.cssClasses}`} key={menuItem.id}>
        <LinkItem menuItem={menuItem} sub={sub} />
      </li>
    )
  }
}
