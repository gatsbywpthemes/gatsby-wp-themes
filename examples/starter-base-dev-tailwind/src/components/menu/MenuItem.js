import React from "react"

import { SubMenu, MenuLink } from "baseComponents"

export const MenuItem = ({ menuItem, orientation }) => {
  if (menuItem.children.length) {
    return <SubMenu menuItem={menuItem} />
  } else {
    return (
      <div
        className={`menu-item flex items-center ${menuItem.cssClasses}`}
        key={menuItem.id}
      >
        <MenuLink
          menuItem={menuItem}
          className="hover:text-accentColor dark:hover:text-dark-accentColor"
        />
      </div>
    )
  }
}
