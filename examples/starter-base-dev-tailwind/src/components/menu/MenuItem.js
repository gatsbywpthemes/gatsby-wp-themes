import React from "react"
import { useColorModeValue } from "@chakra-ui/react"
import { SubMenu, MenuLink } from "baseComponents"

export const MenuItem = ({ menuItem, orientation }) => {
  const color = useColorModeValue("accent", "modes.dark.accent")
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
          _hover={{
            color,
          }}
        />
      </div>
    )
  }
}
