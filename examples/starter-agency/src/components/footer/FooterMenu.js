import React from "react"
import { useMenuItems } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { MenuLink } from "~/components/menu/MenuLink"

const FooterMenu = ({ location }) => {
  const menuItems = useMenuItems(location)

  return (
    <nav>
      {menuItems.map((menuItem) => {
        return (
          <div key={menuItem.id}>
            <MenuLink menuItem={menuItem} />
          </div>
        )
      })}
    </nav>
  )
}

export default FooterMenu
