import React from "react"
import { Flex, useColorModeValue } from "@chakra-ui/react"
import { SubMenu, MenuLink } from "baseComponents"

export const MenuItem = ({ menuItem, orientation }) => {
  const color = useColorModeValue("accent", "modes.dark.accent")
  if (menuItem.children.length) {
    return <SubMenu menuItem={menuItem} />
  } else {
    return (
      <Flex
        as="div"
        alignItems="center"
        className={`menu-item ${menuItem.cssClasses}`}
        key={menuItem.id}
      >
        <MenuLink
          menuItem={menuItem}
          _hover={{
            color,
          }}
        />
      </Flex>
    )
  }
}
