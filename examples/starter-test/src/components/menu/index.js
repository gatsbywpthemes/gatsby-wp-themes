import React from "react"
import { useMenuItems } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const Menu = ({ location = "PRIMARY" }) => {
  const menuItems = useMenuItems(location)

  return (
    menuItems && (
      <nav>
        <h3>Menu</h3>
        {menuItems.map(({ label, url, id }) => (
          <a key={id} href={url}>
            {label}
          </a>
        ))}
      </nav>
    )
  )
}
