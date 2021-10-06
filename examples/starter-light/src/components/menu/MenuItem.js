import React from "react"
import { MenuLink } from "./MenuLink"
import { Submenu } from "./Submenu"

export const MenuItem = ({ menuItem, orientation }) => {
  if (menuItem.children.length) {
    return <Submenu menuItem={menuItem} />
  } else {
    return (
      <div
        className={`menu-item flex items-center ${menuItem.cssClasses} ${
          orientation === "V"
            ? "text-mobileMenuColor dark:text-dark-mobileMenuColor"
            : "text-text dark:text-dark-text"
        }`}
        key={menuItem.id}
      >
        <MenuLink
          menuItem={menuItem}
          className={` ${
            orientation === "V"
              ? "text-mobileMenuColor dark:text-dark-mobileMenuColor"
              : "text-text dark:text-dark-text"
          }`}
        />
      </div>
    )
  }
}
