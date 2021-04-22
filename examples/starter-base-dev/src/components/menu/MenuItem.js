import React from "react"
import { Flex } from "@chakra-ui/react"
import { SubMenu, MenuLink } from "baseComponents"

export const MenuItem = ({ menuItem, orientation }) => {
  if (menuItem.children.length) {
    return <SubMenu menuItem={menuItem} />
  } else {
    return (
      <Flex
        as="div"
        alignItems="center"
        className={`menu-item ${menuItem.cssClasses}`}
        key={menuItem.id}
        _hover={{ color: "primary" }}
      >
        <MenuLink menuItem={menuItem} _hover={{ color: "primary" }} />
      </Flex>
    )
  }
}
