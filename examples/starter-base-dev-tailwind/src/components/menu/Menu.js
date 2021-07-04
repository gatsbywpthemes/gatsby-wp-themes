import React from "react"
import { useMenuItems } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { MenuItem, SubMenu } from "baseComponents"
import clsx from "clsx"

export const Menu = ({ location = "PRIMARY", orientation, ...props }) => {
  const menuItems = useMenuItems(location)
  const styleVariant = orientation === "V" ? menuVStyles : menuHStyles
  const style = {
    ...styleVariant,
    "[aria-current]": {
      fontStyle: "italic",
      fontWeight: "body",
    },

    ".menu-item,button": {
      listStyle: "none",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: "xs",
      letterSpacing: "wider",
      px: 3,
    },
  }

  return (
    menuItems && (
      <nav className="menu" css={{ ...style }} aria-label="main" {...props}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <div
          direction={orientation === "H" ? "row" : "column"}
          className={clsx("flex", {
            "flex-col": orientation === "V",
          })}
          role="menu"
          className="menuItemGroup"
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

export const menuHStyles = {
  ">ul": {
    display: "flex",
    ">li": {
      "&.has-subMenu": {
        cursor: "pointer",
        position: "relative",
      },
    },
  },
}

export const menuVStyles = {
  ".menu-item": {
    py: 3,
    borderBottom: "1px dashed rgba(256,256,256,.2)",
    "&:last-of-type": {
      border: "none",
    },
  },
}
