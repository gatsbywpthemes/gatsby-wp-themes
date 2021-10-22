import React from "react"
import { useMenuItems } from "@gatsbywpthemes/gatsby-theme-blog-data-light/src/hooks"
import { MenuItem, SubMenu } from "./index"
import clsx from "clsx"

export const Menu = ({ location = "PRIMARY", orientation, ...props }) => {
  const menuItems = useMenuItems(location)

  return (
    menuItems && (
      <nav className="menu" aria-label="main" {...props}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <div
          className={clsx(" menuItemGroup flex", {
            "flex-col": orientation === "V",
            "space-x-4": orientation === "H",
          })}
          role="menu"
        >
          {menuItems.map((menuItem) => {
            if (menuItem.children.length) {
              return (
                <SubMenu
                  key={menuItem.id}
                  menuItem={menuItem}
                  orientation={orientation}
                />
              )
            }
            return (
              <MenuItem
                key={menuItem.id}
                menuItem={menuItem}
                orientation={orientation}
              />
            )
          })}
        </div>
      </nav>
    )
  )
}
