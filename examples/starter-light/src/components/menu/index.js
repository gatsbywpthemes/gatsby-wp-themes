import React from "react"
import { useMenuItems } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Submenu } from "./Submenu"
import { MenuItem } from "./MenuItem"
import tw, { css } from "twin.macro"

export const MainMenu = ({ location = "PRIMARY", orientation, ...props }) => {
  const menuItems = useMenuItems(location)
  return (
    menuItems && (
      <nav
        className={`main-menu flex  space-x-3${
          orientation === "V" ? "flex-col" : ""
        }`}
        css={css`
          & > .menu-item {
            ${tw`px-2 transition duration-300 hover:text-accentColor dark:hover:text-dark-accentColor`}
          }
        `}
        aria-label="main"
        {...props}
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
      </nav>
    )
  )
}
