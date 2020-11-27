import React from 'react'
import { SubMenu } from './SubMenu'
import { LinkItem } from './LinkItem'

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
