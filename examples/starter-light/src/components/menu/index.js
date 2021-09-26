import React from "react"
import { useMenuItems } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Submenu } from "./Submenu"
import { MenuItem } from "./MenuItem"

export const MainMenu = ({ location = "PRIMARY", orientation, ...props }) => {
  const menuItems = useMenuItems(location)
  return (
    menuItems && (
      <nav className="menu" aria-label="main" {...props}>
        <div
          role="menu"
          className={`menuItemGroup flex ${orientation === "V" && "flex-col"}`}
        >
          {menuItems.map((menuItem) => {
            if (menuItem.children.length) {
              return (
                <Submenu
                  key={menuItem.id}
                  menuItem={menuItem}
                  orientation={orientation}
                />
              )
            } else {
              return (
                <MenuItem
                  key={menuItem.id}
                  menuItem={menuItem}
                  orientation={orientation}
                />
              )
            }
          })}
        </div>
      </nav>
    )
  )
}
