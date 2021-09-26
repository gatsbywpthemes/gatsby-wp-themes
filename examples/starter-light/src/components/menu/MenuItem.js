import React from "react"
import { MenuLink } from "./MenuLink"
import { Submenu } from "./Submenu"

export const MenuItem = ({ menuItem, orientation }) => {
  if (menuItem.children.length) {
    return <Submenu menuItem={menuItem} />
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
